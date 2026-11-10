import { useState, useEffect } from "react";
import resume from "virtual:resume-data";   // parsed from resume/master_resume.tex + shared/profile.tex
import { SITE } from "./site.config.js";

// ═══════════════════════════════════════════════════════
//  DATA
//  Everything below comes from resume/master_resume.tex and shared/profile.tex
//  (see vite.config.js). Do not copy resume content in here; edit the .tex files.
// ═══════════════════════════════════════════════════════
const { profile, education, skills, experience, projects, extra } = resume;
const [firstName, ...restName] = profile.name.split(" ");

// ═══════════════════════════════════════════════════════
//  NAV
// ═══════════════════════════════════════════════════════
const NAV_LINKS = [
  { id: "education",  label: "Education"      },
  { id: "skills",     label: "Skills"         },
  { id: "experience", label: "Experience"     },
  { id: "projects",   label: "Projects"       },
  { id: "extra",      label: "Extra"          },
  { id: "contact",    label: "Contact"        },
];

function NavBar({ active, menuOpen, toggle }) {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (menuOpen) toggle();
  };

  return (
    <>
      <nav className="pf-nav">
        <span
          className="pf-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          SH<span className="pf-brand-cursor" />
        </span>

        <ul className="pf-nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                className={active === l.id ? "nav-on" : ""}
                onClick={() => go(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="pf-ham" onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`pf-mob${menuOpen ? " mob-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
        ))}
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════
//  HERO
// ═══════════════════════════════════════════════════════
function Hero() {
  return (
    <section id="hero" className="pf-hero">
      <div className="hero-avail">
        <span className="hero-dot" />
        Open to opportunities
      </div>

      {/* <div className="hero-curr">
        ⌖ &nbsp;Currently: Industry Placement @ Synergy IQ
      </div> */}

      <h1 className="hero-name">
        {firstName}<br />{restName.join(" ")}
      </h1>

      <p className="hero-role">
        <span className="pr">&gt;</span>{SITE.role}
      </p>
      <p className="hero-int">{SITE.interests}</p>
      <p className="hero-bio">{SITE.bio}</p>

      <div className="hero-btns">
        <button
          className="btn btn-s"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>
        <a className="btn btn-o" href={SITE.resumePdf} download>
          Download CV
        </a>
      </div>

      <div className="hero-soc">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={`mailto:${profile.email}`}>Email ↗</a>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════
//  SECTION WRAPPER
// ═══════════════════════════════════════════════════════
function Sec({ id, num, title, children }) {
  return (
    <section id={id} className="pf-sec">
      <div className="sec-hd fade">
        <div className="sec-n">{num}</div>
        <h2 className="sec-t">{title}</h2>
      </div>
      {children}
    </section>
  );
}

// ═══════════════════════════════════════════════════════
//  EDUCATION
// ═══════════════════════════════════════════════════════
function Education() {
  return (
    <Sec id="education" num="01 // EDUCATION" title="Education">
      {education.map((e, i) => (
        <div key={i} className="edu-c fade">
          <div className="edu-deg">{e.degree}</div>
          <div className="edu-sch">{e.school}</div>
          <div className="edu-per">{e.period}</div>
        </div>
      ))}
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  SKILLS
// ═══════════════════════════════════════════════════════
function Skills() {
  return (
    <Sec id="skills" num="02 // SKILLS" title="Technical Skills">
      {Object.entries(skills).map(([cat, items]) => (
        <div key={cat} className="sk-g fade">
          <div className="sk-lbl">{cat}</div>
          <div className="tg-w">
            {items.map((t) => (
              <span key={t} className="tg">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  EXPERIENCE
// ═══════════════════════════════════════════════════════
function Experience() {
  return (
    <Sec id="experience" num="03 // EXPERIENCE" title="Technical Experience">
      <div className="tl">
        {experience.map((e, i) => (
          <div key={i} className="tl-it fade">
            <div className="tl-ttl">{e.title}</div>
            <div className="tl-meta">
              <span className="tl-co">{e.company}</span>
              <span className="tl-per">{e.period}</span>
            </div>
            {e.tech.length > 0 && (
              <div className="tl-tgs">
                {e.tech.map((t) => <span key={t} className="tg-xs">{t}</span>)}
              </div>
            )}
            <ul className="tl-pts">
              {e.points.map((p, j) => <li key={j}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════════════════
function Projects() {
  return (
    <Sec id="projects" num="04 // PROJECTS" title="Technical Projects">
      <div className="pj-g">
        {projects.map((p, i) => (
          <div key={i} className="pj-c fade">
            <div className="pj-ttl">{p.title}</div>
            <div className="pj-per">{p.period}</div>
            <div className="tg-w" style={{ marginBottom: "0.9rem" }}>
              {p.tech.map((t) => (
                <span key={t} className="tg">{t}</span>
              ))}
            </div>
            <ul className="tl-pts" style={{ marginBottom: "0.9rem" }}>
              {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
            </ul>
            {p.link && (
              <a className="pj-lnk" href={p.link} target="_blank" rel="noreferrer">
                {p.linkLabel} ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  EXTRACURRICULAR
// ═══════════════════════════════════════════════════════
function Extra() {
  return (
    <Sec id="extra" num="05 // EXTRACURRICULAR" title="Extracurricular">
      {extra.map((e, i) => (
        <div key={i} className="ex-it fade">
          <div className="ex-ttl">{e.title}</div>
          <div className="ex-per">{e.period}</div>
          <ul className="ex-pts">
            {e.points.map((p, j) => <li key={j}>{p}</li>)}
          </ul>
        </div>
      ))}
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  CONTACT
// ═══════════════════════════════════════════════════════
function Contact() {
  const items = [
    { label: "Email",  value: profile.email,  href: `mailto:${profile.email}` },
    { label: "Phone",  value: profile.phone,  href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "GitHub", value: profile.github, href: profile.githubUrl },
  ];

  return (
    <Sec id="contact" num="06 // CONTACT" title="Contact">
      <div className="ct-g fade">
        {items.map((it) => (
          <div key={it.label} className="ct-it">
            <span className="ct-lbl">{it.label}</span>
            <a
              className="ct-val"
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {it.value}
            </a>
          </div>
        ))}
      </div>
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  PORTFOLIO
// ═══════════════════════════════════════════════════════
export default function Portfolio() {
  const [active,   setActive]   = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-in (fade) observer
    const fadeObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".fade").forEach((el) => fadeObs.observe(el));

    // Active section observer (for nav highlighting)
    const secObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-32% 0px -62% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => secObs.observe(s));

    return () => { fadeObs.disconnect(); secObs.disconnect(); };
  }, []);

  return (
    <div>
      <NavBar
        active={active}
        menuOpen={menuOpen}
        toggle={() => setMenuOpen((o) => !o)}
      />

      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Extra />
        <Contact />
      </main>

      <footer className="pf-ft">
        <span>{profile.name}</span>
        <span>{profile.email}</span>
      </footer>
    </div>
  );
}