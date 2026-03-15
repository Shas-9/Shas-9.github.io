import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════════
const DATA = {
  name: "Sharzil Hasnine",
  role: "Software Engineer",
  interests: "Distributed Systems · Algorithms · Systems Programming",
  bio: "Software Engineer interested in Distributed Systems. Building experience through live projects and honing problem solving skills with competitive programming.",
  contact: {
    email: "sharzilhasnine975@gmail.com",
    phone: "+61 451 645 516",
    github: "https://github.com/Shas-9",
    linkedin: "https://linkedin.com/in/sharzilhasnine",
    resume: "Sharzil_Hasnine_Resume.pdf",
  },
  education: {
    degree: "Bachelor of Computer Science (Advanced)",
    school: "University of Adelaide",
    period: "Feb 2023 – Nov 2026",
  },
  skills: {
    Languages: ["C++", "Java", "TypeScript", "JavaScript", "Python", "C", "GDScript", "MATLAB", "Bash"],
    "Libraries & Frameworks": ["Node.js", "MongoDB", "Flask", "JUnit", "Godot", "Pandas", "NumPy", "Matplotlib", "Sklearn", "TensorFlow", "ROS2"],
    "Tools & Software": ["Git", "Linux", "Docker", "Jira", "Gazebo", "Nav2"],
  },
  experience: [
    {
      title: "Industry Placement – Smart Training Planner",
      company: "Synergy IQ",
      period: "Mar 2026 – May 2026",
      tech: ["Python", "Flask", "Jira"],
      points: [
        "Developing a Flask-based web application to migrate a prototype into a production-grade automated scheduling system, implementing dynamic constraint logic, visual conflict detection, and an editable user interface to eliminate manual scheduling conflicts.",
      ],
    },
    {
      title: "Industry Project – Block Model Compression Algorithm",
      company: "Maptek",
      period: "Aug 2025 – Oct 2025",
      tech: ["C++", "Bash", "Jira"],
      points: [
        "Architected a stream-oriented lossless compression system for large-scale 3D geological datasets, optimising for speed and compression ratio.",
        "Implemented an octree-based spatial compression algorithm achieving 98.8% data size reduction and 2.6x processing speed improvement over the uncompressed baseline.",
        "Designed an automated testing framework verifying correctness of compressed outputs against uncompressed input, independent of compression strategy.",
        "Built a cross-platform CI pipeline with automated testing and reproducible Linux and Windows builds, improving team velocity by 1.5x.",
      ],
    },
    {
      title: "Technical Volunteer – Autonomous Navigation",
      company: "Adelaide Rover Team",
      period: "Oct 2024 – Feb 2025",
      tech: ["Python", "C++", "ROS2", "Nav2", "Gazebo"],
      points: [
        "Designed a behavior tree for the rover's autonomous navigation pipeline using Nav2, enabling modular decision-making for path planning, recovery behaviours, and goal execution.",
        "Simulated navigation behaviour using Gazebo for the Australian Rover Challenge's autonomous navigation task.",
      ],
    },
  ],
  projects: [
    {
      title: "Daily Iftar Registration System",
      period: "Feb – Mar 2026",
      tech: ["TypeScript", "Node.js", "MongoDB", "Docker"],
      link: "https://aumsa.com.au",
      linkLabel: "Live Site",
      desc: "Production backend supporting 70+ daily users for live event registration.",
      points: [
        "Delivered production-ready backend features under tight release cycles, building and iterating on RESTful APIs (Node.js, MongoDB) to support live event registration used by 70+ daily users.",
        "Architected DST-safe, timezone-aware date handling (Australia/Adelaide), eliminating off-by-one scheduling bugs.",
        "Designed scalable MongoDB database schemas and API contracts to support rapid feature expansion and seamless frontend integration.",
      ],
    },
    {
      title: "Paxos Consensus Algorithm",
      period: "Sep – Oct 2025",
      tech: ["Java", "JUnit", "Bash"],
      link: "https://github.com/Shas-9/Paxos",
      linkLabel: "GitHub",
      desc: "Distributed Paxos from scratch with TCP socket messaging and fault tolerance testing.",
      points: [
        "Implemented the Paxos Consensus Algorithm without use of any external libraries, enabling multiple concurrent nodes to elect a single leader despite network delays and node failures.",
        "Developed a TCP socket-based messaging protocol supporting Paxos phases (prepare, promise, accept, learn) with nodes dynamically acting as proposers, acceptors, and learners.",
        "Designed a failure simulation framework introducing latency, message loss, and node crashes to validate consensus correctness under concurrent proposals and partial system failures.",
      ],
    },
    {
      title: "Distributed Weather Aggregation Server",
      period: "Aug – Sep 2025",
      tech: ["Java", "JUnit", "REST API"],
      link: "https://github.com/Shas-9/Weather-Aggregation-Server",
      linkLabel: "GitHub",
      desc: "Aggregation server implementing Lamport clocks for causal consistency.",
      points: [
        "Engineered a distributed data aggregation system supporting concurrent clients and content servers.",
        "Implemented Lamport logical clocks to maintain causal consistency and deterministic ordering of concurrent updates across distributed components, without use of external libraries.",
        "Developed a multi-threaded aggregation server with thread-safe request processing, persistent storage with crash recovery and automated 30s expiry of stale data sources.",
      ],
    },
    {
      title: "SVM & Neural Network Implementation",
      period: "Aug – Oct 2025",
      tech: ["Python", "NumPy", "Sklearn"],
      link: "https://github.com/Shas-9/SVM-and-Neural-Network-Implementation",
      linkLabel: "GitHub",
      desc: "SVM and neural network built entirely from scratch.",
      points: [
        "Implemented a Support Vector Machine from scratch by solving the dual optimization problem with quadratic programming, including RBF kernel support and hyperparameter tuning.",
        "Built a two-layer neural network from scratch using forward and backward propagation, implementing core modules (Linear, ReLU, Cross-Entropy) and training with mini-batch SGD on 200 features and 8.5k samples.",
        "Developed an end-to-end ML training pipeline including data standardization, train/validation/test splits, hyperparameter search, and performance evaluation.",
      ],
    },
    {
      title: "CatQuest – 2D Maze Game",
      period: "Aug – Oct 2023",
      tech: ["C++", "SFML"],
      link: "https://github.com/Shas-9/Labyrinth-game",
      linkLabel: "GitHub",
      desc: "Procedurally generated maze game written in C++ using SFML.",
      points: [
        "Engineered modular game architecture, separating game state, entities, and UI for maintainability and scalability.",
        "Integrated enemy AI and player mechanics within the existing procedural random maze generation system, including real-time collision handling and health management.",
        "Designed the game UI with seamless navigation and state transitions without affecting game loop performance.",
      ],
    },
    {
      title: "Monkey Run – Unihack 2024",
      period: "Mar 2024",
      tech: ["GDScript", "Godot", "Python", "MediaPipe"],
      link: "https://github.com/rayokamoto/unihack",
      linkLabel: "GitHub",
      desc: "Motion-controlled endless runner using real-time webcam input.",
      points: [
        "Developed an endless runner game with randomised object generation using the Godot game engine.",
        "Implemented input detection by tracking player movement through webcam using the MediaPipe ML framework.",
        "Integrated input detection system with game mechanics to deliver a cohesive gaming experience.",
      ],
    },
  ],
  extra: [
    {
      title: "Adelaide Competitive Programming League (AUCPL)",
      period: "Mar – Oct 2025",
      points: ["Achieved 4th place team finish in the 2025 AUCPL season."],
    },
    {
      title: "Secretary – AUMSA",
      period: "Nov 2024 – Present",
      points: [
        "Managed internal communications for a 10+ member committee, producing structured meeting minutes and action item documentation.",
        "Managed university-facing logistics including room bookings, building access, and prayer room maintenance.",
        "Administered organisational knowledge management using Google Drive, maintaining structured repositories for cross-functional collaboration.",
      ],
    },
    {
      title: "Events Officer – AUMSA",
      period: "Nov 2023 – Nov 2024",
      points: [
        "Planned and executed society events for 100+ attendees, managing end-to-end logistics and budgets.",
        "Coordinated venue setup, audio-visual infrastructure, and weekly Friday prayer preparations.",
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════
//  STYLES
// ═══════════════════════════════════════════════════════
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:    #07070b;
  --bg2:   #0c0c11;
  --sf:    #101016;
  --sf2:   #14141b;
  --br:    #1a1a26;
  --br2:   #24243a;
  --tx:    #ccccda;
  --tx2:   #7878a0;
  --tx3:   #44445e;
  --ac:    #e8a020;
  --ac-d:  rgba(232,160,32,0.1);
  --wh:    #eeeef8;
  --grn:   #4ade80;
  --f:     'IBM Plex Mono', monospace;
  --mw:    960px;
  --nh:    56px;
}

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg);
  background-image: radial-gradient(circle, rgba(232,160,32,0.018) 1px, transparent 1px);
  background-size: 44px 44px;
  background-attachment: fixed;
  color: var(--tx);
  font-family: var(--f);
  font-size: 14px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--br2); border-radius: 2px; }

/* ── NAV ──────────────────────────────────────── */
.pf-nav {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--nh); z-index: 100;
  background: rgba(7,7,11,0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--br);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(1.25rem,4vw,3rem);
}

.pf-brand {
  display: flex; align-items: center; gap: 0;
  color: var(--ac); font-size: 13px; font-weight: 600;
  letter-spacing: 0.06em; cursor: pointer; user-select: none;
  text-decoration: none;
}

.pf-brand-cursor {
  display: inline-block;
  width: 2px; height: 14px;
  background: var(--ac);
  margin-left: 2px;
  vertical-align: -2px;
  animation: blink 1.1s step-end infinite;
}

.pf-nav-links { list-style: none; display: flex; gap: clamp(0.75rem,1.5vw,1.5rem); }

.pf-nav-links button {
  background: none; border: none;
  border-bottom: 1px solid transparent;
  color: var(--tx3); font-family: var(--f); font-size: 12px;
  letter-spacing: 0.06em; cursor: pointer;
  padding: 2px 0; transition: color 0.2s, border-color 0.2s;
}

.pf-nav-links button:hover { color: var(--tx2); }
.pf-nav-links button.nav-on { color: var(--ac); border-bottom-color: var(--ac); }

.pf-ham {
  display: none; flex-direction: column; gap: 5px;
  cursor: pointer; background: none; border: none; padding: 4px;
}

.pf-ham span { display: block; width: 20px; height: 1px; background: var(--tx2); transition: all 0.2s; }

/* ── MOBILE NAV ───────────────────────────────── */
.pf-mob {
  display: none; position: fixed;
  top: var(--nh); left: 0; right: 0; z-index: 99;
  background: var(--bg2); border-bottom: 1px solid var(--br);
  padding: 0.5rem clamp(1.25rem,4vw,3rem) 1rem;
  flex-direction: column;
}

.pf-mob.mob-open { display: flex; }

.pf-mob button {
  background: none; border: none;
  border-bottom: 1px solid var(--br);
  color: var(--tx2); font-family: var(--f); font-size: 13px;
  padding: 0.55rem 0; text-align: left; cursor: pointer;
  transition: color 0.15s;
}

.pf-mob button:last-child { border-bottom: none; }
.pf-mob button:hover { color: var(--ac); }

/* ── HERO ─────────────────────────────────────── */
.pf-hero {
  min-height: 100vh;
  padding: calc(var(--nh) + 7rem) clamp(1.25rem,4vw,3rem) 5rem;
  max-width: var(--mw); margin: 0 auto;
}

.hero-avail {
  display: inline-flex; align-items: center; gap: 0.6rem;
  font-size: 11px; color: var(--tx2); letter-spacing: 0.1em;
  text-transform: uppercase; margin-bottom: 0.5rem;
  animation: fu 0.5s 0.1s both;
}

.hero-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--grn); flex-shrink: 0;
  animation: pulse 2.2s 0.8s infinite;
}

.hero-curr {
  font-size: 11px; color: var(--tx3); letter-spacing: 0.06em;
  margin-bottom: 2.25rem;
  animation: fu 0.5s 0.15s both;
}

.hero-name {
  font-size: clamp(3rem,8vw,5.5rem); font-weight: 700;
  color: var(--wh); line-height: 1.01; letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  animation: fu 0.55s 0.2s both;
}

.hero-role {
  font-size: clamp(0.875rem,1.8vw,1rem);
  color: var(--tx2); font-weight: 300; margin-bottom: 0.3rem;
  animation: fu 0.5s 0.28s both;
}

.hero-role .pr { color: var(--ac); margin-right: 0.4rem; }

.hero-int {
  font-size: 12px; color: var(--tx3); letter-spacing: 0.04em;
  margin-bottom: 2rem;
  animation: fu 0.5s 0.32s both;
}

.hero-bio {
  font-size: 13px; color: var(--tx2); font-weight: 300;
  max-width: 480px; line-height: 1.9; margin-bottom: 2.5rem;
  animation: fu 0.5s 0.36s both;
}

.hero-btns {
  display: flex; gap: 0.75rem; flex-wrap: wrap;
  margin-bottom: 2.25rem;
  animation: fu 0.5s 0.42s both;
}

.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.5rem 1.1rem; font-family: var(--f); font-size: 12px;
  letter-spacing: 0.07em; text-decoration: none; border-radius: 2px;
  cursor: pointer; transition: all 0.18s; border: none;
}

.btn-s {
  background: var(--ac); color: #000;
  border: 1px solid var(--ac); font-weight: 600;
}

.btn-s:hover { background: #f0b030; border-color: #f0b030; }

.btn-o {
  background: transparent; color: var(--tx2);
  border: 1px solid var(--br2);
}

.btn-o:hover { border-color: var(--ac); color: var(--ac); background: var(--ac-d); }

.hero-soc {
  display: flex; gap: 1.5rem;
  animation: fu 0.5s 0.48s both;
}

.hero-soc a {
  color: var(--tx3); text-decoration: none; font-size: 12px;
  letter-spacing: 0.04em; transition: color 0.2s;
}

.hero-soc a:hover { color: var(--ac); }

/* ── SECTIONS ─────────────────────────────────── */
.pf-sec {
  max-width: var(--mw); margin: 0 auto;
  padding: 5.5rem clamp(1.25rem,4vw,3rem);
  border-top: 1px solid var(--br);
}

.sec-hd { margin-bottom: 2.75rem; }

.sec-n {
  font-size: 10px; color: var(--ac); letter-spacing: 0.16em;
  margin-bottom: 0.35rem; font-weight: 500;
}

.sec-t {
  font-size: clamp(1.4rem,3vw,2rem); font-weight: 700;
  color: var(--wh); letter-spacing: -0.018em;
}

/* ── EDUCATION ────────────────────────────────── */
.edu-c {
  padding: 1.5rem 1.75rem; background: var(--sf);
  border: 1px solid var(--br); position: relative;
}

.edu-c::before {
  content: ''; position: absolute;
  left: 0; top: 0; bottom: 0; width: 3px;
  background: var(--ac);
}

.edu-deg { font-size: 15px; font-weight: 600; color: var(--wh); margin-bottom: 0.3rem; }
.edu-sch { color: var(--ac); font-size: 12px; letter-spacing: 0.05em; margin-bottom: 0.2rem; }
.edu-per { color: var(--tx3); font-size: 11px; }

/* ── SKILLS ───────────────────────────────────── */
.sk-g { margin-bottom: 1.75rem; }
.sk-g:last-child { margin-bottom: 0; }

.sk-lbl {
  font-size: 10px; color: var(--tx3); letter-spacing: 0.14em;
  text-transform: uppercase; margin-bottom: 0.65rem;
}

.tg-w { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.tg {
  padding: 3px 10px; border: 1px solid var(--br2);
  color: var(--tx2); font-size: 12px; border-radius: 2px;
  background: var(--sf); transition: all 0.15s;
  cursor: default; font-family: var(--f);
}

.tg:hover { border-color: var(--ac); color: var(--ac); background: var(--ac-d); }

/* ── TIMELINE ─────────────────────────────────── */
.tl { border-left: 1px solid var(--br2); margin-left: 3px; }

.tl-it { position: relative; padding: 0 0 2.75rem 1.75rem; }
.tl-it:last-child { padding-bottom: 0; }

.tl-it::before {
  content: ''; position: absolute;
  left: -4px; top: 5px;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--ac);
  box-shadow: 0 0 0 3px var(--bg);
}

.tl-ttl { font-size: 14px; font-weight: 600; color: var(--wh); margin-bottom: 0.25rem; }

.tl-meta {
  display: flex; gap: 1rem; flex-wrap: wrap;
  align-items: center; margin-bottom: 0.6rem;
}

.tl-co { color: var(--ac); font-size: 12px; }
.tl-per { color: var(--tx3); font-size: 11px; letter-spacing: 0.04em; }

.tl-tgs { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.75rem; }

.tg-xs {
  padding: 1px 7px; border: 1px solid var(--br);
  color: var(--tx3); font-size: 11px; border-radius: 2px;
  background: var(--sf); font-family: var(--f);
}

.tl-pts { list-style: none; padding: 0; }

.tl-pts li {
  font-size: 13px; color: var(--tx2); font-weight: 300;
  padding: 0.18rem 0 0.18rem 1.1rem;
  position: relative; margin-bottom: 0.35rem; line-height: 1.68;
}

.tl-pts li::before {
  content: '▸'; color: var(--ac); font-size: 10px;
  position: absolute; left: 0; top: 0.3rem;
}

/* ── PROJECTS ─────────────────────────────────── */
.pj-g {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.pj-c {
  border: 1px solid var(--br); background: var(--sf);
  padding: 1.25rem; position: relative; overflow: hidden;
  transition: border-color 0.2s, background 0.2s;
}

.pj-c::before {
  content: ''; position: absolute;
  left: 0; top: 0; bottom: 0; width: 0;
  background: var(--ac); transition: width 0.28s;
}

.pj-c:hover::before { width: 3px; }
.pj-c:hover { border-color: var(--br2); background: var(--sf2); }

.pj-ttl { font-size: 14px; font-weight: 600; color: var(--wh); margin-bottom: 0.2rem; }
.pj-per { color: var(--tx3); font-size: 11px; margin-bottom: 0.7rem; }
.pj-desc { font-size: 12px; color: var(--tx2); font-weight: 300; line-height: 1.7; margin-bottom: 0.75rem; }
.pj-tgs { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.9rem; }

.pj-lnk {
  color: var(--ac); text-decoration: none; font-size: 12px;
  letter-spacing: 0.04em; transition: opacity 0.18s;
}

.pj-lnk:hover { opacity: 0.65; }

/* ── EXTRA ────────────────────────────────────── */
.ex-it {
  padding-bottom: 2.25rem; margin-bottom: 2.25rem;
  border-bottom: 1px solid var(--br);
}

.ex-it:last-child { border-bottom: none; padding-bottom: 0; margin-bottom: 0; }

.ex-ttl { font-size: 14px; font-weight: 600; color: var(--wh); margin-bottom: 0.2rem; }
.ex-per { color: var(--tx3); font-size: 11px; margin-bottom: 0.7rem; }

.ex-pts { list-style: none; padding: 0; }

.ex-pts li {
  font-size: 13px; color: var(--tx2); font-weight: 300;
  padding: 0.15rem 0 0.15rem 1.1rem;
  position: relative; line-height: 1.68;
}

.ex-pts li::before {
  content: '▸'; color: var(--tx3); font-size: 10px;
  position: absolute; left: 0; top: 0.3rem;
}

/* ── CONTACT ──────────────────────────────────── */
.ct-g {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 2.5rem;
}

.ct-it { display: flex; flex-direction: column; gap: 0.2rem; }

.ct-lbl {
  font-size: 10px; color: var(--tx3); letter-spacing: 0.14em;
  text-transform: uppercase;
}

.ct-val {
  color: var(--tx); font-size: 13px;
  text-decoration: none; transition: color 0.18s;
}

a.ct-val:hover { color: var(--ac); }

/* ── FOOTER ───────────────────────────────────── */
.pf-ft {
  max-width: var(--mw); margin: 0 auto;
  border-top: 1px solid var(--br);
  padding: 2rem clamp(1.25rem,4vw,3rem);
  color: var(--tx3); font-size: 11px; letter-spacing: 0.04em;
  display: flex; justify-content: space-between;
  align-items: center; flex-wrap: wrap; gap: 0.5rem;
}

/* ── FADE ANIMATION ───────────────────────────── */
.fade {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade.in { opacity: 1; transform: none; }

/* ── KEYFRAMES ────────────────────────────────── */
@keyframes fu {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: none; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
  70%  { box-shadow: 0 0 0 7px rgba(74,222,128,0); }
  100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
}

/* ── RESPONSIVE ───────────────────────────────── */
@media (max-width: 768px) {
  .pf-nav-links { display: none; }
  .pf-ham       { display: flex; }
  .pj-g         { grid-template-columns: 1fr; }
  .ct-g         { grid-template-columns: 1fr; }
  body          { background-attachment: scroll; }
}
`;

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
        Sharzil<br />Hasnine
      </h1>

      <p className="hero-role">
        <span className="pr">&gt;</span>{DATA.role}
      </p>
      <p className="hero-int">{DATA.interests}</p>
      <p className="hero-bio">{DATA.bio}</p>

      <div className="hero-btns">
        <button
          className="btn btn-s"
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects
        </button>
        <a className="btn btn-o" href={DATA.contact.resume} download>
          Download CV
        </a>
      </div>

      <div className="hero-soc">
        <a href={DATA.contact.github}   target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={DATA.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={`mailto:${DATA.contact.email}`}>Email ↗</a>
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
  const e = DATA.education;
  return (
    <Sec id="education" num="01 // EDUCATION" title="Education">
      <div className="edu-c fade">
        <div className="edu-deg">{e.degree}</div>
        <div className="edu-sch">{e.school}</div>
        <div className="edu-per">{e.period}</div>
      </div>
    </Sec>
  );
}

// ═══════════════════════════════════════════════════════
//  SKILLS
// ═══════════════════════════════════════════════════════
function Skills() {
  return (
    <Sec id="skills" num="02 // SKILLS" title="Technical Skills">
      {Object.entries(DATA.skills).map(([cat, items]) => (
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
        {DATA.experience.map((e, i) => (
          <div key={i} className="tl-it fade">
            <div className="tl-ttl">{e.title}</div>
            <div className="tl-meta">
              <span className="tl-co">{e.company}</span>
              <span className="tl-per">{e.period}</span>
            </div>
            <div className="tl-tgs">
              {e.tech.map((t) => <span key={t} className="tg-xs">{t}</span>)}
            </div>
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
        {DATA.projects.map((p, i) => (
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
            <a className="pj-lnk" href={p.link} target="_blank" rel="noreferrer">
              {p.linkLabel} ↗
            </a>
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
      {DATA.extra.map((e, i) => (
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
  const c = DATA.contact;
  const items = [
    { label: "Email",    value: c.email,           href: `mailto:${c.email}`  },
    { label: "Phone",    value: c.phone,           href: `tel:${c.phone}`     },
    { label: "GitHub",   value: "github.com/Shas-9", href: c.github           },
    { label: "LinkedIn", value: "sharzilhasnine",  href: c.linkedin           },
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
      <style>{CSS}</style>

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
        <span>Sharzil Hasnine</span>
        <span>{DATA.contact.email}</span>
      </footer>
    </div>
  );
}