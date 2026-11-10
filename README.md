# Sharzil Hasnine: portfolio, résumés and cover letters

One repo, one source of truth. The portfolio website ([shas-9.github.io](https://shas-9.github.io)),
every résumé and every cover letter read the same files, so you never edit the same fact twice.

```
.
├── shared/
│   ├── profile.tex              name, phone, email, GitHub, portfolio: ONE place
│   ├── resume_preamble.tex      the résumé look (macros, margins, fonts)
│   └── cover_letter_preamble.tex  the cover letter look
├── resume/
│   ├── master_resume.tex        EVERYTHING you have ever done. Feeds the website too
│   ├── temporary_resume.tex     scratch copy for the job you are applying to now
│   └── Sharzil_Hasnine_Resume.tex   final version you submit
├── cover_letter/
│   ├── master_cover_letter.tex  template + library of reusable paragraphs
│   ├── temporary_cover_letter.tex   scratch copy for the current job
│   └── Sharzil_Hasnine_Cover_Letter.tex   final version you submit
├── applications/                snapshots of what you sent (made by `make archive`)
├── archive/                     old standalone résumés / letters / old page code
├── src/ public/ index.html …    the website (React + Vite)
├── scripts/                     LaTeX → website parser, helper banners
├── Makefile                     builds PDFs and runs the workflow below
└── .github/workflows/deploy.yml builds the CV PDF + site and deploys to GitHub Pages
```

## Day-to-day

### Adding or changing a project / job / skill
Edit **`resume/master_resume.tex`** only, then push. The PDF *and* the website both update.
Contact details live in **`shared/profile.tex`**.

```
npm install        # once
npm run dev        # live preview; edits to the .tex files reload the page
npm run resume:json   # shows exactly what the website reads from the master
```

### Applying for a job
```
make new-resume              # temporary_resume.tex = fresh copy of the master
# edit resume/temporary_resume.tex: cut and reword for the role (aim for 1 page)
make temporary-resume        # preview  -> build/temporary_resume.pdf
make final-resume            # promote to Sharzil_Hasnine_Resume.tex + build PDF

make new-cover-letter        # temporary_cover_letter.tex = fresh copy of the template
# fill in the PER-JOB DETAILS, keep 2-3 evidence blocks, replace every red \todo{...}
make temporary-cover-letter  # preview
make final-cover-letter      # refuses while any \todo{...} is left; then promotes + builds

make archive NAME=acme-swe   # keep a copy of what you sent in applications/
```
PDFs go to `build/` (git-ignored). `make help` lists everything. The `new-*` targets refuse to
overwrite a temporary file whose edits were never promoted (use `FORCE=1` to override).
No `make`/LaTeX locally? Upload the repo to Overleaf, or just edit the `.tex` files and open
them in any LaTeX editor. The `\input{../shared/...}` paths only need the folders kept together.

## How the website reads the master résumé

`vite.config.js` has a small plugin that parses `resume/master_resume.tex` + `shared/profile.tex`
(using `scripts/parse-resume.mjs`) into the data the React components render. Rules for the master
are written at the top of `master_resume.tex`. In short:

* keep the section names *Education, Technical Skills, Experience, Projects, Extracurriculars*;
* experience headings are `Role - Project - Organisation` (spaced hyphens; the last part is the organisation);
* one `\resumeItem{}` per bullet, tech as `\emph{\textbf{Tech:}} A, B, C`, project link via `\href`;
* `%` comments hide an entry from **both** the PDF and the website.

If the master can't be parsed the build **fails with a message**, so a broken file never gets deployed.
Website-only copy (role, interests, bio, CV file name) is in `src/site.config.js`.

## Deploying
Push to `main`. GitHub Actions compiles `resume/Sharzil_Hasnine_Resume.tex`, publishes it as the site's
"Download CV" file, builds the site and deploys to GitHub Pages.
