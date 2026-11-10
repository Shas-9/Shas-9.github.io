// Website-only copy: text that appears on the portfolio but is not part of a resume.
// Everything else (name, contact, education, skills, experience, projects,
// extracurriculars) is read from resume/master_resume.tex and shared/profile.tex.
export const SITE = {
  role: "Software Engineer",
  interests: "Distributed Systems · Algorithms · Systems Programming",
  bio: "Software Engineer interested in Distributed Systems. Building experience through live projects and honing problem solving skills with competitive programming.",

  // PDF served by the "Download CV" button. It is built from
  // resume/Sharzil_Hasnine_Resume.tex by the GitHub Actions workflow (see .github/workflows/deploy.yml).
  resumePdf: "/Sharzil_Hasnine_Resume.pdf",
};
