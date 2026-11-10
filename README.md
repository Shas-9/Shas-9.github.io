# Sharzil Hasnine: portfolio


```
.
├── shared/
│   ├── profile.tex              name, phone, email, GitHub, portfolio
│   ├── resume_preamble.tex      macros, margins, fonts
│   └── cover_letter_preamble.tex  cover letter look
├── resume/
│   ├── master_resume.tex        all info
│   ├── temporary_resume.tex     
│   └── Sharzil_Hasnine_Resume.tex   
├── cover_letter/
│   ├── master_cover_letter.tex  template
│   ├── temporary_cover_letter.tex  
│   └── Sharzil_Hasnine_Cover_Letter.tex  
```

### Info
PDFs go to `build/` (git-ignored). `make help` lists everything. The `new-*` targets refuse to
overwrite a temporary file whose edits were never promoted (use `FORCE=1` to override).

## Deploying
Push to `main`. GitHub Actions compiles `resume/Sharzil_Hasnine_Resume.tex`, publishes it as the site's
"Download CV" file, builds the site and deploys to GitHub Pages.
