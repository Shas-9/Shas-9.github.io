// Prints exactly what the website will read from master_resume.tex.  Usage: npm run resume:json
import { readFileSync } from "node:fs";
import { parseResume } from "./parse-resume.mjs";

const root = new URL("..", import.meta.url);
const master = readFileSync(new URL("resume/master_resume.tex", root), "utf8");
const profile = readFileSync(new URL("shared/profile.tex", root), "utf8");
console.log(JSON.stringify(parseResume(master, profile), null, 2));
