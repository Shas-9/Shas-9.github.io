// Parses resume/master_resume.tex (+ shared/profile.tex) into plain JSON for the website.
//
// It understands the macros used in the resume template (\resumeSubheading,
// \resumeProjectHeading, \resumeItem, ...) and the conventions documented at the
// top of master_resume.tex. It is deliberately strict: if something the website
// needs is missing it throws, so a broken master fails the build instead of
// silently publishing an empty section.

// ---------------------------------------------------------------- low level --

/** Remove LaTeX comments (an unescaped % to end of line). */
export function stripComments(src) {
  return src
    .split(/\r?\n/)
    .map((line) => {
      for (let i = 0; i < line.length; i++) {
        if (line[i] === "\\") { i++; continue; }
        if (line[i] === "%") return line.slice(0, i);
      }
      return line;
    })
    .join("\n");
}

/** Read a {...} group starting at/after `pos` (skipping whitespace). Returns [content, endPos] or null. */
function readGroup(s, pos) {
  let i = pos;
  while (i < s.length && /\s/.test(s[i])) i++;
  if (s[i] !== "{") return null;
  let depth = 0;
  const start = i + 1;
  for (; i < s.length; i++) {
    if (s[i] === "\\") { i++; continue; }
    if (s[i] === "{") depth++;
    else if (s[i] === "}") {
      depth--;
      if (depth === 0) return [s.slice(start, i), i + 1];
    }
  }
  throw new Error("Unbalanced braces in LaTeX near: " + s.slice(pos, pos + 60));
}

function readGroups(s, pos, n, macro) {
  const out = [];
  let p = pos;
  for (let k = 0; k < n; k++) {
    const g = readGroup(s, p);
    if (!g) throw new Error(`\\${macro} needs ${n} {...} arguments but only found ${k}, near: ${s.slice(pos, pos + 80).trim()}`);
    out.push(g[0]);
    p = g[1];
  }
  return [out, p];
}

/** Convert a LaTeX fragment to plain text. */
export function clean(tex) {
  let t = tex;
  // \href{url}{text} -> text
  t = t.replace(/\\href\s*\{[^}]*\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, "$1");
  t = t.replace(/\\\\/g, " ");                       // line breaks
  t = t.replace(/\$\|\$/g, "|");
  t = t.replace(/\\(%|&|#|_|\$)/g, "$1");            // escaped specials
  t = t.replace(/\\(small|footnotesize|large|Large|Huge|scshape|bfseries|itshape|normalsize)\b\s*/g, "");
  t = t.replace(/\\(ldots|dots)\b/g, "…");
  t = t.replace(/\\[,;: ]/g, " ");
  t = t.replace(/\\[a-zA-Z]+\*?/g, "");              // any other macro name (keeps its {argument})
  t = t.replace(/[{}]/g, "");
  t = t.replace(/---/g, "—").replace(/--/g, "–");
  t = t.replace(/~/g, "\u00A0");                     // LaTeX ~ is a non-breaking space
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

/** Keep a date range readable: "Aug 2026 - Oct 2026" -> "Aug 2026 – Oct 2026". */
function cleanPeriod(tex) {
  return clean(tex).replace(/\s+-\s+/g, " – ");
}

function firstHref(tex) {
  const m = tex.match(/\\href\s*\{([^}]*)\}/);
  return m ? m[1] : null;
}

/** Split on top-level commas (ignores commas inside parentheses). */
function splitList(text) {
  const out = [];
  let depth = 0, cur = "";
  for (const ch of text) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) { out.push(cur); cur = ""; } else cur += ch;
  }
  out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
}

function parseTech(tex) {
  const t = clean(tex).replace(/^\s*Tech:\s*/i, "");
  return splitList(t);
}

// ------------------------------------------------------------------ entries --

/** Scan a section body into [{ kind, args, items }]. */
function scanEntries(body, sectionName) {
  const entries = [];
  let cur = null;
  const re = /\\(resumeSubheading|resumeProjectHeading|resumeItem)(?![a-zA-Z])/g;
  let m;
  while ((m = re.exec(body))) {
    const macro = m[1];
    const n = macro === "resumeSubheading" ? 4 : macro === "resumeProjectHeading" ? 2 : 1;
    const [args, end] = readGroups(body, m.index + m[0].length, n, macro);
    re.lastIndex = end;
    if (macro === "resumeItem") {
      if (!cur) throw new Error(`[${sectionName}] \\resumeItem found before any heading`);
      cur.items.push(clean(args[0]));
    } else {
      cur = { kind: macro, args, items: [] };
      entries.push(cur);
    }
  }
  return entries;
}

function parseEducation(body) {
  return scanEntries(body, "Education").map((e) => ({
    degree: clean(e.args[0]),
    period: cleanPeriod(e.args[1]),
    school: clean(e.args[2] ?? ""),
  }));
}

function parseSkills(body) {
  // \textbf{Category}{: a, b, c}
  const skills = {};
  const re = /\\textbf\s*/g;
  let m;
  while ((m = re.exec(body))) {
    const cat = readGroup(body, m.index + m[0].length);
    if (!cat) continue;
    const list = readGroup(body, cat[1]);
    if (!list || !list[0].trim().startsWith(":")) continue;
    skills[clean(cat[0])] = splitList(clean(list[0]).replace(/^:\s*/, ""));
    re.lastIndex = list[1];
  }
  return skills;
}

function parseExperience(body) {
  return scanEntries(body, "Experience").map((e) => {
    // "Role - Project - Organisation": last part is the organisation.
    const parts = clean(e.args[0]).split(/\s+-\s+/).map((p) => p.trim());
    const company = parts.length > 1 ? parts[parts.length - 1] : "";
    const title = (parts.length > 1 ? parts.slice(0, -1) : parts).join(" – ");
    return {
      title,
      company,
      period: cleanPeriod(e.args[1]),
      tech: parseTech(e.args[2] ?? ""),
      points: e.items,
    };
  });
}

function parseProjects(body) {
  return scanEntries(body, "Projects").map((e) => {
    const href = firstHref(e.args[3] ?? "");
    let linkLabel = null;
    if (href) {
      let host = "";
      try { host = new URL(href).hostname.replace(/^www\./, ""); } catch { /* ignore */ }
      linkLabel = host === "github.com" ? "GitHub" : "Live Site";
    }
    return {
      title: clean(e.args[0]),
      period: cleanPeriod(e.args[1]),
      tech: parseTech(e.args[2] ?? ""),
      link: href,
      linkLabel,
      points: e.items,
    };
  });
}

function parseExtra(body) {
  return scanEntries(body, "Extracurriculars").map((e) => {
    const org = e.kind === "resumeSubheading" ? clean(e.args[2] ?? "") : "";
    const title = clean(e.args[0]);
    return {
      title: org ? `${title} – ${org}` : title,
      period: cleanPeriod(e.args[1]),
      points: e.items,
    };
  });
}

// ------------------------------------------------------------------ profile --

/** Reads \newcommand{\profileXxx}{value} lines from shared/profile.tex. */
export function parseProfile(profileTex) {
  const src = stripComments(profileTex);
  const get = (key) => {
    const m = src.match(new RegExp(`\\\\newcommand\\s*\\{\\\\profile${key}\\}\\s*\\{([^}]*)\\}`));
    if (!m) throw new Error(`shared/profile.tex is missing \\newcommand{\\profile${key}}{...}`);
    return clean(m[1]);
  };
  const github = get("Github");
  const portfolio = get("Portfolio");
  return {
    name: get("Name"),
    phone: get("Phone"),
    email: get("Email"),
    github,
    githubUrl: "https://" + github,
    portfolio,
    portfolioUrl: "https://" + portfolio,
  };
}

// --------------------------------------------------------------------- main --

const SECTION_RULES = [
  { key: "education",  test: /education/i },
  { key: "skills",     test: /skill/i },
  { key: "experience", test: /experience/i },
  { key: "projects",   test: /project/i },
  { key: "extra",      test: /extra|leadership|community|volunteer|activit/i },
];
const IGNORED_SECTIONS = /summary|objective|profile/i;

export function parseResume(masterTex, profileTex) {
  const src = stripComments(masterTex);
  const docStart = src.indexOf("\\begin{document}");
  const docEnd = src.indexOf("\\end{document}");
  if (docStart < 0 || docEnd < 0) throw new Error("master_resume.tex: missing \\begin{document} / \\end{document}");
  const doc = src.slice(docStart, docEnd);

  // split into sections
  const parts = [];
  const re = /\\section\*?\s*\{([^}]*)\}/g;
  let m, last = null;
  while ((m = re.exec(doc))) {
    if (last) last.body = doc.slice(last.from, m.index);
    last = { name: clean(m[1]), from: m.index + m[0].length, body: "" };
    parts.push(last);
  }
  if (last) last.body = doc.slice(last.from);

  const found = {};
  for (const p of parts) {
    const rule = SECTION_RULES.find((r) => r.test.test(p.name));
    if (!rule) {
      if (!IGNORED_SECTIONS.test(p.name)) {
        console.warn(`[resume] Section "${p.name}" is not shown on the website (unrecognised name).`);
      }
      continue;
    }
    if (found[rule.key]) throw new Error(`master_resume.tex has two sections that map to "${rule.key}" ("${p.name}")`);
    found[rule.key] = p.body;
  }

  for (const key of ["education", "skills", "experience", "projects", "extra"]) {
    if (!found[key]) throw new Error(`master_resume.tex: could not find the "${key}" section. Check the \\section{...} names.`);
  }

  const data = {
    profile: parseProfile(profileTex),
    education: parseEducation(found.education),
    skills: parseSkills(found.skills),
    experience: parseExperience(found.experience),
    projects: parseProjects(found.projects),
    extra: parseExtra(found.extra),
  };

  // sanity checks: fail loudly rather than publish an empty/garbled section
  if (!data.education.length) throw new Error("master_resume.tex: Education section has no entries");
  if (!Object.keys(data.skills).length) throw new Error('master_resume.tex: Technical Skills must look like \\textbf{Category}{: a, b, c}');
  for (const key of ["experience", "projects", "extra"]) {
    if (!data[key].length) throw new Error(`master_resume.tex: ${key} section has no entries`);
    for (const e of data[key]) {
      if (!e.title || !e.period) throw new Error(`master_resume.tex: an entry in ${key} is missing a title or period: ${JSON.stringify(e)}`);
      if (!e.points.length) console.warn(`[resume] "${e.title}" (${key}) has no \\resumeItem bullets.`);
    }
  }
  for (const e of data.experience) {
    if (!e.company) console.warn(`[resume] Experience "${e.title}" has no organisation. Use "Role - Project - Organisation".`);
  }
  return data;
}
