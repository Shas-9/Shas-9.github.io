// import { useState, useEffect } from "react";

// // ═══════════════════════════════════════════════════════
// //  DATA
// // ═══════════════════════════════════════════════════════
// const DATA = {
//   name: "Sharzil Hasnine",
//   studentId: "a1881771",
//   term: "Semester 1, 2026",
//   pdfPath: "/employability.pdf",

//   preReflection: `Before the start of this semester, I identified several areas of my professional development that I wanted to improve. While my degree has provided me with a strong theoretical foundation in computer science and software engineering, I felt that I lacked experience working on projects that had real-world users and tangible impact. Most of my previous projects were either coursework-based or personal projects, which meant I had limited exposure to developing solutions for actual stakeholders, gathering feedback, and adapting to user needs. As a result, one of my primary goals for this semester was to gain practical experience through projects that would allow me to apply my technical knowledge in a real-world context.

// Another area that I wanted to focus on was improving my ability to succeed in technical recruitment processes. The software engineering industry is highly competitive, and technical interviews often assess problem-solving ability, programming skills, communication, and the ability to work under pressure. Although I had a solid understanding of many technical concepts, I felt that I needed more practice demonstrating these skills in interview environments. To address this gap, I planned to participate in competitive programming contests, solve algorithmic problems regularly, and take part in mock interviews. Through these activities, I hoped to strengthen my analytical thinking, improve my coding efficiency, and build confidence when discussing technical solutions with interviewers.

// In addition to developing my technical skills, I also wanted to improve my professional networking and communication abilities. I consider myself to be naturally introverted and often find it challenging to initiate conversations with new people. While this has not significantly affected my academic performance, I recognise that communication and relationship-building are important skills in any professional environment. Networking can create opportunities for mentorship, internships, employment, and collaboration, and I wanted to become more comfortable engaging with professionals, recruiters, and fellow students. Therefore, I made it a goal to attend industry events, workshops, and networking opportunities throughout the semester and actively challenge myself to meet new people and expand my professional network.

// Throughout this process, I also intended to continue applying for internships, graduate roles, and other relevant opportunities. By actively participating in recruitment processes and attending interviews, I hoped to gain valuable experience, identify areas for improvement, and better understand employer expectations. Even if applications were unsuccessful, I viewed each experience as an opportunity to learn and develop professionally.

// While I believe I possess strong technical foundations, these areas represent important gaps that I must continue to develop in order to become a well-rounded and employable graduate. Through the activities completed during the semester, I aimed to better prepare myself for future employment opportunities and take meaningful steps towards my long-term career goals in the technology industry.`,

//   activities: [
//     {
//       num: "01",
//       title: "Optiver Information Session",
//       img: "optiver.jpg",
//       caption: "Trading game ranking (Sharzil)",
//       body: `The Optiver information session provided insight into the company's role in quantitative trading and market making. The session explained how Optiver operates as a global trading firm that uses technology, mathematics, and algorithmic systems to provide liquidity in financial markets. This was particularly interesting as it demonstrated a different application of computer science beyond traditional software engineering roles.

// Representatives discussed how engineers and traders work together to build high-performance systems where speed, accuracy, and decision-making are critical. This helped me better understand how concepts such as algorithms, data structures, and system optimisation are applied in real-world financial environments.

// A key highlight of the session was the interactive trading game, which simulated real-time market decision-making. This activity reinforced the importance of quick thinking, pattern recognition, and analytical reasoning under pressure.

// In addition to technical learning, the event provided a valuable networking opportunity. I was able to speak with Optiver employees and learn about their career paths, improving my understanding of quantitative finance as a potential career pathway.`,
//     },
//     {
//       num: "02",
//       title: "Daily Iftar Registration System",
//       img: null,
//       link: { href: "https://aumsa.com.au/", label: "Live Site ↗" },
//       body: `The Daily Iftar Registration System was a real-world software project developed for ISSUA to automate event registration for daily iftar gatherings. Previously, this process was managed manually, which was inefficient and time-consuming.

// The project was completed in a two-person team within a strict two-week deadline. I contributed heavily to backend development and architectural design decisions. Due to the time constraint, we focused on delivering a functional minimum viable product rather than over-engineering features.

// This experience taught me the importance of balancing technical quality with delivery constraints. I also gained experience deploying a live system used by real users, which exposed me to production debugging, monitoring, and logging practices.

// From a professional perspective, this project significantly improved my backend development skills and understanding of the software development lifecycle. It also strengthened my ability to work under pressure and deliver real-world solutions.`,
//     },
//     {
//       num: "03",
//       title: "Coffee Chat Networking Session",
//       img: "coffee1.jpg",
//       caption: "Coffee chat with software developer from Enabled Solutions",
//       body: `This activity involved attending a coffee chat with a professional contact I met at a university career fair. After initially connecting at the event, I followed up to organise a one-on-one discussion.

// During the conversation, I gained valuable insight into industry expectations, recruitment processes, and career development strategies. This helped me better understand how academic learning translates into professional environments.

// As an introverted person, this activity pushed me outside my comfort zone and improved my confidence in professional communication. It also highlighted the importance of maintaining connections beyond formal networking events.

// Overall, this experience strengthened my networking skills and improved my understanding of industry expectations.`,
//     },
//     {
//       num: "04",
//       title: "Big Meet Career Fair",
//       img: "big meet.png",
//       caption: "Big Meet career fair",
//       body: `I attended the Big Meet career fair in Adelaide, which is one of the largest university career events in the city. The event provided opportunities to engage with multiple companies across different sectors.

// During the event, I spoke with representatives from various organisations and learned about internship and graduate opportunities in the tech industry. This helped broaden my understanding of potential career pathways.

// The experience improved my confidence in approaching professionals and initiating conversations in a formal setting. It also helped me better understand what employers look for in graduate candidates.`,
//     },
//     {
//       num: "05",
//       title: "Uni Eid Event (ISSUA)",
//       img: "eid.jpeg",
//       caption: "University Eid Event",
//       body: `As Secretary of ISSUA, I helped organise the university Eid event in collaboration with the International Students team. My responsibilities included coordinating logistics, supporting event planning, and representing the interests of Muslim students.

// This role required communication, responsibility, and teamwork across multiple stakeholders. I also developed new connections within the university community and improved my leadership and organisational skills.

// This experience strengthened my ability to manage responsibilities in a professional environment and represent a student organisation effectively.`,
//     },
//     {
//       num: "06",
//       title: "CS Club Industry Information Session",
//       img: "industry.jpg",
//       caption: "Industry info session",
//       body: `This event provided an overview of different industry pathways available to computer science students. It covered roles in software engineering, data science, and other technology fields.

// The session helped me better understand the range of career opportunities available and how different skill sets apply to different roles. It also gave insight into industry expectations.

// This improved my awareness of career pathways and helped me plan my future development more effectively.`,
//     },
//     {
//       num: "07",
//       title: "AI Career Panel",
//       img: "ai.jpg",
//       caption: "AI panel",
//       body: `This event focused on artificial intelligence career pathways and industry applications. Speakers shared insights into working in AI-related roles and the skills required to succeed in the field.

// The session helped me understand the growing importance of AI in industry and the types of opportunities available in this area. It also highlighted relevant skills such as machine learning, data analysis, and research.

// This activity improved my awareness of emerging technologies and potential future career directions.`,
//     },
//     {
//       num: "08",
//       title: "Hackathon",
//       img: "hackathon.jpg",
//       caption: "Hackathon",
//       body: `I participated in a hackathon where our team developed a small game project. The event involved rapid prototyping, teamwork, and problem-solving within a limited timeframe.

// This experience helped me improve collaboration skills, creativity, and technical implementation under pressure. It also allowed me to meet new people and learn new tools and approaches to software development.

// Overall, the hackathon improved my ability to work in fast-paced environments and strengthened my teamwork skills.`,
//     },
//     {
//       num: "09",
//       title: "AUCPL Round 1",
//       img: "aucpl r1.png",
//       caption: "AUCPL Round 1 evidence (Team: Powerpuff Girls)",
//       wide: true,
//       body: `This was the first round of the Adelaide University Competitive Programming League (AUCPL), where our team of three competed in a timed algorithmic contest. The contest focused on problem-solving under pressure, requiring both speed and accuracy.

// Our team solved seven problems and achieved third place in this round. While this was an acceptable result, it highlighted areas for improvement, particularly in speed of implementation and communication efficiency during problem allocation. We learned how to better distribute tasks based on individual strengths and how to manage time more effectively during the contest.

// From an employability perspective, this activity strengthened my logical reasoning, coding efficiency, and teamwork skills. It also helped me become more comfortable working under strict time constraints, which is directly relevant to technical interview environments and software engineering roles.`,
//     },
//     {
//       num: "10",
//       title: "AUCPL Round 2",
//       img: "aucpl r2.png",
//       caption: "AUCPL Round 2 evidence (Team: Powerpuff Girls)",
//       wide: true,
//       body: `The second round of AUCPL showed clear improvement from our initial performance. After reflecting on Round 1, our team increased preparation through regular practice sessions and focused on strengthening algorithmic problem-solving skills.

// In this round, we solved eight problems, demonstrating improved coordination, communication, and confidence. We were able to divide tasks more efficiently and maintain better structure during the contest. This improvement reflected the effectiveness of our preparation strategy.

// This activity enhanced my ability to recognise problem patterns more quickly and apply appropriate solutions under pressure. It also reinforced the importance of consistent practice and teamwork when preparing for technical challenges.

// Overall, this experience strengthened my problem-solving ability and helped develop skills that are directly applicable to technical interviews and software engineering roles.`,
//     },
//     {
//       num: "11",
//       title: "AUCPL Round 3",
//       img: "aucpl r3.jpeg",
//       caption: "AUCPL Round 3 evidence (Team: Powerpuff Girls)",
//       body: `The third round of AUCPL represented the consolidation of our team's development throughout the semester. By this stage, we had developed strong communication and a clear understanding of each member's strengths.

// We again solved eight problems and maintained consistent performance across contests, resulting in an overall second-place standing after three rounds. This consistency demonstrated the effectiveness of our preparation and teamwork strategy.

// This round improved my ability to remain calm under pressure and approach unfamiliar problems logically. It also reinforced the importance of trust and collaboration in team-based problem solving.

// Overall, this activity contributed significantly to my technical development, resilience, and confidence in algorithmic problem-solving.`,
//     },
//     {
//       num: "12",
//       title: "Industry Placement Project",
//       img: "presentation.jpeg",
//       caption: "Final handover presentation",
//       body: `I participated in an industry project with a group of students working with a real company. The project involved developing a software solution and presenting it to the company at the end of the placement.

// Although the codebase and GitHub repository are private due to company ownership, our team completed a final handover presentation to the client.

// This experience provided exposure to professional workflows, teamwork in a structured environment, and client communication. It also improved my understanding of industry expectations and collaborative development practices.`,
//     },
//   ],

//   reflections: [
//     {
//       title: "Daily Iftar Registration System",
//       sections: [
//         {
//           h: "Situation",
//           t: `One of the most significant employability experiences I undertook during Semester 1 was developing a Daily Iftar Registration System for a university club. The purpose of the system was to automate the registration process for attendees wishing to participate in daily iftar events during Ramadan. Prior to this project, the registration process was managed manually, which required significant administrative effort and was prone to inefficiencies. Having personally managed this process in the previous year, I understood the operational challenges and recognised the opportunity to improve the experience for both organisers and attendees.`,
//         },
//         {
//           h: "Task",
//           t: `The project had an extremely demanding timeline. My teammate and I were given only two weeks to design, develop, test, and deploy a complete system before it needed to go live. As part of a two-person team, I was responsible for contributing to the overall architecture of the system, making key design decisions, and taking ownership of backend development. This was particularly challenging because I had never previously developed a complete backend system for a real-world application that would immediately be used by a large number of people.`,
//         },
//         {
//           h: "Action",
//           t: `To ensure the project could be completed within the limited timeframe, we prioritised delivering a reliable minimum viable product rather than attempting to implement every possible feature or optimise every aspect of the system. Drawing on my experience managing registrations manually, I helped identify the most critical requirements and focused development efforts on those areas.

// Throughout the project, I was heavily involved in architectural discussions and backend implementation. I learned how to design systems with deployment and maintainability in mind rather than solely focusing on technical elegance. Because the project had real users and strict deadlines, many decisions required balancing ideal technical solutions with practical constraints such as time, available resources, and risk.

// In addition, I implemented logging and monitoring mechanisms to assist with troubleshooting after deployment. While testing was conducted before release, the limited development timeline meant that some issues could only be discovered once the system was operating in a live environment.`,
//         },
//         {
//           h: "Result",
//           t: `The system was successfully completed within the two-week deadline and deployed in time for the start of the event period. It was immediately adopted by users and successfully automated a process that had previously required substantial manual effort. Although several minor issues emerged after deployment, the logging and monitoring systems enabled us to quickly identify the causes and release fixes with minimal disruption to users.

// The successful delivery of the project demonstrated my ability to work effectively under pressure, collaborate within a small development team, and deliver a functional product within strict deadlines. Most importantly, the project provided me with valuable experience building software that had a direct impact on real users rather than existing purely as an academic exercise.`,
//         },
//         {
//           h: "Learning / Professional Development",
//           t: `This experience significantly influenced my understanding of professional software development. Prior to this project, I often focused on finding the most technically optimal solution. However, I learned that in industry environments, delivering a working, reliable product on time is often more valuable than pursuing perfection. This shift in perspective helped me develop a stronger appreciation for project management, prioritisation, and iterative improvement.

// The project also strengthened my backend development skills and increased my confidence in taking ownership of critical technical responsibilities. Furthermore, it highlighted the importance of post-deployment monitoring, logging, and maintenance. Before this experience, I viewed software development primarily as building and releasing a product. I now understand that deployment is only one stage of the software lifecycle and that ongoing monitoring, support, and continuous improvement are equally important.

// From an employability perspective, this project helped bridge one of the key gaps I identified at the beginning of the semester: gaining experience with real-world projects and users. It provided evidence that I can apply technical knowledge to solve practical problems, work within deadlines, adapt to changing circumstances, and support a live production system. These are skills that are highly valued by employers and have increased my confidence in pursuing future software engineering opportunities.`,
//         },
//       ],
//     },
//     {
//       title: "Competitive Programming Contests",
//       sections: [
//         {
//           h: "Situation",
//           t: `Throughout Semester 1, I actively participated in several competitive programming contests as part of a three-person team. Competitive programming involves solving complex algorithmic and problem-solving challenges under strict time constraints, requiring both technical knowledge and effective teamwork. Our long-term objective was to qualify for the regional finals of the International Collegiate Programming Contest (ICPC), one of the most prestigious programming competitions for university students. To work towards this goal, we participated in four major contests during the semester, including three rounds of the Adelaide University Competitive Programming League (AUCPL) and the nationwide AllUni contest, which involved teams from universities across Australia.`,
//         },
//         {
//           h: "Task",
//           t: `As a team, our task was not only to compete in these contests but also to continuously improve our problem-solving ability, teamwork, and contest performance in preparation for future competitions. Since competitive programming requires a combination of technical expertise, communication, and strategic decision-making, we recognised that success would depend on consistent practice and collaboration. My personal objective was to strengthen my algorithmic thinking, improve my performance under pressure, and develop skills that would also be valuable in technical interviews and software engineering roles.`,
//         },
//         {
//           h: "Action",
//           t: `To achieve these goals, our team committed to a structured preparation plan throughout the semester. We held weekly practice sessions every Saturday, where we worked through challenging programming problems, reviewed solutions, and discussed different approaches to solving them. In addition to team practice, I also spent time independently studying algorithms and data structures, analysing previous contest problems, and identifying areas where I needed improvement.

// During contests, we worked together to allocate problems based on individual strengths and communicate effectively under time pressure. This required clear decision-making and trust between team members. Through repeated participation, I learned how to balance speed and accuracy, when to persist with a difficult problem, and when it was more beneficial to move on and focus on other tasks.

// One particularly valuable learning experience came from participating in the AllUni contest. Although our team performed strongly throughout the AUCPL rounds and was ranked second overall, our performance in the AllUni competition did not meet our expectations. Initially, this result was disappointing; however, it provided an opportunity to critically evaluate our preparation and identify weaknesses in our approach.`,
//         },
//         {
//           h: "Result",
//           t: `The experience of participating in multiple contests significantly improved my technical problem-solving skills and my ability to work effectively under pressure. Our strong performance in the AUCPL demonstrated the effectiveness of our preparation and teamwork, while the less successful outcome in the AllUni contest highlighted areas where further development was needed.

// Beyond the competition results themselves, I became noticeably more confident when approaching unfamiliar and complex technical challenges. Problems that initially seemed overwhelming became more manageable as I developed systematic approaches to analysing and solving them.`,
//         },
//         {
//           h: "Learning / Professional Development",
//           t: `This experience had a significant impact on both my personal and professional development. One of the most important lessons I learned was that improvement is a continuous process and that setbacks can provide valuable opportunities for growth. While it was rewarding to achieve strong results in some competitions, I learned just as much from competitions where we did not perform as well as expected.

// From an employability perspective, competitive programming directly contributed to improving skills that are highly valued in software engineering careers. The ability to analyse problems, design efficient solutions, think logically under pressure, and communicate effectively within a team are all competencies that employers actively seek. I also noticed a significant improvement in my performance during technical interview preparation. Many technical interview questions require similar analytical thinking and algorithmic problem-solving skills, and regular contest participation helped me approach these challenges with greater confidence and efficiency.

// Overall, this experience strengthened both my technical capabilities and my resilience. It reinforced the importance of disciplined practice, teamwork, and continuous learning, all of which will support my future goal of securing employment as a software engineer and competing successfully in future ICPC competitions.`,
//         },
//       ],
//     },
//   ],
// };

// // ═══════════════════════════════════════════════════════
// //  STYLES
// // ═══════════════════════════════════════════════════════
// const CSS = `
// @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

// .ep-root, .ep-root *, .ep-root *::before, .ep-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

// .ep-root {
//   --bg:    #07070b;
//   --bg2:   #0c0c11;
//   --sf:    #101016;
//   --sf2:   #14141b;
//   --br:    #1a1a26;
//   --br2:   #24243a;
//   --tx:    #ccccda;
//   --tx2:   #7878a0;
//   --tx3:   #44445e;
//   --ac:    #e8a020;
//   --ac-d:  rgba(232,160,32,0.1);
//   --wh:    #eeeef8;
//   --grn:   #4ade80;
//   --f:     'IBM Plex Mono', monospace;
//   --mw:    900px;
//   --nh:    56px;

//   background-color: var(--bg);
//   background-image: radial-gradient(circle, rgba(232,160,32,0.018) 1px, transparent 1px);
//   background-size: 44px 44px;
//   color: var(--tx);
//   font-family: var(--f);
//   font-size: 14px;
//   line-height: 1.7;
//   -webkit-font-smoothing: antialiased;
//   min-height: 100vh;
// }

// .ep-root ::-webkit-scrollbar { width: 3px; }
// .ep-root ::-webkit-scrollbar-track { background: var(--bg); }
// .ep-root ::-webkit-scrollbar-thumb { background: var(--br2); border-radius: 2px; }

// /* ── TOP BAR ──────────────────────────────────── */
// .ep-bar {
//   position: sticky; top: 0; left: 0; right: 0; z-index: 50;
//   background: rgba(7,7,11,0.92);
//   backdrop-filter: blur(16px);
//   -webkit-backdrop-filter: blur(16px);
//   border-bottom: 1px solid var(--br);
//   padding: 0.9rem clamp(1.25rem,4vw,3rem);
//   display: flex; align-items: center; justify-content: space-between;
//   gap: 1rem; flex-wrap: wrap;
// }

// .ep-bar-id {
//   font-size: 11px; color: var(--tx3); letter-spacing: 0.08em;
// }

// .ep-bar-id strong { color: var(--ac); font-weight: 600; }

// .ep-dl {
//   display: inline-flex; align-items: center; gap: 0.5rem;
//   background: var(--ac); color: #000; border: 1px solid var(--ac);
//   font-family: var(--f); font-weight: 600; font-size: 12px;
//   letter-spacing: 0.06em; padding: 0.55rem 1.1rem; border-radius: 2px;
//   text-decoration: none; cursor: pointer; transition: all 0.18s;
// }

// .ep-dl:hover { background: #f0b030; border-color: #f0b030; transform: translateY(-1px); }

// .ep-dl-ic { width: 13px; height: 13px; flex-shrink: 0; }

// /* ── HERO / COVER ─────────────────────────────── */
// .ep-hero {
//   max-width: var(--mw); margin: 0 auto;
//   padding: clamp(3rem,8vw,5.5rem) clamp(1.25rem,4vw,3rem) 3.5rem;
// }

// .ep-eyebrow {
//   display: inline-flex; align-items: center; gap: 0.6rem;
//   font-size: 11px; color: var(--tx2); letter-spacing: 0.14em;
//   text-transform: uppercase; margin-bottom: 1.5rem;
// }

// .ep-eyebrow-dot {
//   width: 6px; height: 6px; border-radius: 50%;
//   background: var(--grn); flex-shrink: 0;
//   animation: pulse 2.2s infinite;
// }

// .ep-title {
//   font-size: clamp(2.4rem,6vw,3.6rem); font-weight: 700;
//   color: var(--wh); line-height: 1.05; letter-spacing: -0.025em;
//   margin-bottom: 1.5rem;
// }

// .ep-meta-row {
//   display: flex; gap: 2.5rem; flex-wrap: wrap;
//   padding-top: 1.75rem; border-top: 1px solid var(--br);
// }

// .ep-meta-it { display: flex; flex-direction: column; gap: 0.25rem; }

// .ep-meta-lbl {
//   font-size: 10px; color: var(--tx3); letter-spacing: 0.14em;
//   text-transform: uppercase;
// }

// .ep-meta-val { font-size: 14px; color: var(--tx); }

// /* ── SECTIONS ─────────────────────────────────── */
// .ep-sec {
//   max-width: var(--mw); margin: 0 auto;
//   padding: 4.5rem clamp(1.25rem,4vw,3rem);
//   border-top: 1px solid var(--br);
// }

// .ep-sec-hd { margin-bottom: 2.5rem; }

// .ep-sec-n {
//   font-size: 10px; color: var(--ac); letter-spacing: 0.16em;
//   margin-bottom: 0.4rem; font-weight: 500;
// }

// .ep-sec-t {
//   font-size: clamp(1.4rem,3vw,1.9rem); font-weight: 700;
//   color: var(--wh); letter-spacing: -0.018em; margin-bottom: 0.6rem;
// }

// .ep-sec-sub {
//   font-size: 13px; color: var(--tx2); font-weight: 300; max-width: 620px;
// }

// /* ── PROSE (pre-reflection) ───────────────────── */
// .ep-prose p {
//   font-size: 13.5px; color: var(--tx2); font-weight: 300;
//   line-height: 1.9; margin-bottom: 1.1rem;
// }

// .ep-prose p:last-child { margin-bottom: 0; }

// /* ── ACTIVITY CARDS ───────────────────────────── */
// .ep-act {
//   border: 1px solid var(--br); background: var(--sf);
//   margin-bottom: 1.25rem; overflow: hidden;
//   transition: border-color 0.2s;
// }

// .ep-act:hover { border-color: var(--br2); }
// .ep-act:last-child { margin-bottom: 0; }

// .ep-act-hd {
//   display: flex; align-items: center; gap: 1rem;
//   padding: 1.1rem 1.4rem;
//   cursor: pointer; user-select: none;
//   background: var(--sf);
// }

// .ep-act-num {
//   font-size: 11px; color: var(--ac); font-weight: 600;
//   letter-spacing: 0.04em; flex-shrink: 0; width: 22px;
// }

// .ep-act-ttl {
//   font-size: 14px; font-weight: 600; color: var(--wh); flex: 1;
// }

// .ep-act-chev {
//   color: var(--tx3); font-size: 11px; transition: transform 0.2s;
//   flex-shrink: 0;
// }

// .ep-act-chev.open { transform: rotate(90deg); color: var(--ac); }

// .ep-act-body {
//   max-height: 0; overflow: hidden;
//   transition: max-height 0.35s ease;
// }

// .ep-act-body.open { max-height: 2400px; }

// .ep-act-in {
//   padding: 0 1.4rem 1.6rem;
//   border-top: 1px solid var(--br);
//   padding-top: 1.4rem;
// }

// .ep-act-img-w {
//   margin-bottom: 1.1rem; border: 1px solid var(--br);
//   background: var(--bg2); overflow: hidden;
// }

// .ep-act-img {
//   width: 100%; display: block; max-height: 420px; object-fit: cover;
// }

// .ep-act-cap {
//   font-size: 11px; color: var(--tx3); padding: 0.6rem 0.85rem;
//   border-top: 1px solid var(--br); letter-spacing: 0.02em;
// }

// .ep-act-link {
//   display: inline-flex; align-items: center; gap: 0.3rem;
//   font-size: 12px; color: var(--ac); text-decoration: none;
//   margin-bottom: 1rem; transition: opacity 0.18s;
// }

// .ep-act-link:hover { opacity: 0.65; }

// .ep-act-text p {
//   font-size: 13px; color: var(--tx2); font-weight: 300;
//   line-height: 1.85; margin-bottom: 0.9rem;
// }

// .ep-act-text p:last-child { margin-bottom: 0; }

// /* ── STAR REFLECTIONS ─────────────────────────── */
// .ep-ref {
//   margin-bottom: 3.5rem;
// }

// .ep-ref:last-child { margin-bottom: 0; }

// .ep-ref-hd {
//   display: flex; align-items: baseline; gap: 0.75rem;
//   margin-bottom: 1.75rem; padding-bottom: 1rem;
//   border-bottom: 1px solid var(--br2);
// }

// .ep-ref-tag {
//   font-size: 10px; color: #000; background: var(--ac);
//   padding: 2px 8px; border-radius: 2px; font-weight: 700;
//   letter-spacing: 0.06em; flex-shrink: 0;
// }

// .ep-ref-ttl {
//   font-size: 17px; font-weight: 600; color: var(--wh);
// }

// .ep-star {
//   border-left: 2px solid var(--br2); margin-left: 3px;
// }

// .ep-star-it {
//   position: relative; padding: 0 0 2rem 1.75rem;
// }

// .ep-star-it:last-child { padding-bottom: 0; }

// .ep-star-it::before {
//   content: ''; position: absolute;
//   left: -4px; top: 4px;
//   width: 7px; height: 7px; border-radius: 50%;
//   background: var(--ac);
//   box-shadow: 0 0 0 3px var(--bg);
// }

// .ep-star-h {
//   font-size: 11px; color: var(--ac); letter-spacing: 0.1em;
//   text-transform: uppercase; font-weight: 600; margin-bottom: 0.6rem;
// }

// .ep-star-t p {
//   font-size: 13px; color: var(--tx2); font-weight: 300;
//   line-height: 1.85; margin-bottom: 0.9rem;
// }

// .ep-star-t p:last-child { margin-bottom: 0; }

// /* ── FOOTER ───────────────────────────────────── */
// .ep-ft {
//   max-width: var(--mw); margin: 0 auto;
//   border-top: 1px solid var(--br);
//   padding: 2.5rem clamp(1.25rem,4vw,3rem) 3.5rem;
//   color: var(--tx3); font-size: 11px; letter-spacing: 0.04em;
//   display: flex; justify-content: space-between;
//   align-items: center; flex-wrap: wrap; gap: 0.5rem;
// }

// /* ── FADE ANIMATION ───────────────────────────── */
// .ep-fade {
//   opacity: 0; transform: translateY(14px);
//   transition: opacity 0.5s ease, transform 0.5s ease;
// }

// .ep-fade.in { opacity: 1; transform: none; }

// @keyframes pulse {
//   0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
//   70%  { box-shadow: 0 0 0 7px rgba(74,222,128,0); }
//   100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
// }

// /* ── RESPONSIVE ───────────────────────────────── */
// @media (max-width: 640px) {
//   .ep-bar { padding: 0.75rem 1.25rem; }
//   .ep-meta-row { gap: 1.5rem; }
// }
// `;

// // ═══════════════════════════════════════════════════════
// //  TOP BAR (with PDF download)
// // ═══════════════════════════════════════════════════════
// function TopBar() {
//   return (
//     <div className="ep-bar">
//       <div className="ep-bar-id">
//         <strong>{DATA.name}</strong> · {DATA.studentId} · {DATA.term}
//       </div>
//       <a className="ep-dl" href={DATA.pdfPath} download>
//         <svg className="ep-dl-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M12 3v12" />
//           <path d="M7 11l5 5 5-5" />
//           <path d="M5 20h14" />
//         </svg>
//         Download Full PDF
//       </a>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  HERO / COVER
// // ═══════════════════════════════════════════════════════
// function Hero() {
//   return (
//     <section className="ep-hero ep-fade">
//       <div className="ep-eyebrow">
//         <span className="ep-eyebrow-dot" />
//         Employability Assessment 1.1
//       </div>
//       <h1 className="ep-title">Employability Profile</h1>
//       <div className="ep-meta-row">
//         <div className="ep-meta-it">
//           <span className="ep-meta-lbl">Name</span>
//           <span className="ep-meta-val">{DATA.name}</span>
//         </div>
//         <div className="ep-meta-it">
//           <span className="ep-meta-lbl">Student ID</span>
//           <span className="ep-meta-val">{DATA.studentId}</span>
//         </div>
//         <div className="ep-meta-it">
//           <span className="ep-meta-lbl">Term</span>
//           <span className="ep-meta-val">{DATA.term}</span>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  SECTION WRAPPER
// // ═══════════════════════════════════════════════════════
// function Sec({ num, title, sub, children }) {
//   return (
//     <section className="ep-sec">
//       <div className="ep-sec-hd ep-fade">
//         <div className="ep-sec-n">{num}</div>
//         <h2 className="ep-sec-t">{title}</h2>
//         {sub && <p className="ep-sec-sub">{sub}</p>}
//       </div>
//       {children}
//     </section>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  PRE-REFLECTION
// // ═══════════════════════════════════════════════════════
// function PreReflection() {
//   return (
//     <Sec num="PART 1.1 // CURRENT EMPLOYABILITY" title="Pre-Reflection" sub="What I set out to achieve, and the gaps I identified at the start of the semester.">
//       <div className="ep-prose ep-fade">
//         {DATA.preReflection.split("\n\n").map((p, i) => (
//           <p key={i}>{p}</p>
//         ))}
//       </div>
//     </Sec>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  ACTIVITY CARD
// // ═══════════════════════════════════════════════════════
// function ActivityCard({ a, open, onToggle }) {
//   return (
//     <div className="ep-act ep-fade">
//       <div className="ep-act-hd" onClick={onToggle}>
//         <span className="ep-act-num">{a.num}</span>
//         <span className="ep-act-ttl">{a.title}</span>
//         <span className={`ep-act-chev${open ? " open" : ""}`}>▸</span>
//       </div>
//       <div className={`ep-act-body${open ? " open" : ""}`}>
//         <div className="ep-act-in">
//           {a.img && (
//             <div className="ep-act-img-w">
//               {/* Replace src with your actual image path, e.g. /images/activities/optiver.jpg */}
//               <img className="ep-act-img" src={`/images/activities/${a.img}`} alt={a.caption || a.title} />
//               {a.caption && <div className="ep-act-cap">{a.caption}</div>}
//             </div>
//           )}
//           {a.link && (
//             <a className="ep-act-link" href={a.link.href} target="_blank" rel="noreferrer">
//               {a.link.label}
//             </a>
//           )}
//           <div className="ep-act-text">
//             {a.body.split("\n\n").map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  ACTIVITIES SECTION
// // ═══════════════════════════════════════════════════════
// function Activities() {
//   const [openSet, setOpenSet] = useState(() => new Set([DATA.activities[0].num]));

//   const toggle = (num) => {
//     setOpenSet((prev) => {
//       const next = new Set(prev);
//       next.has(num) ? next.delete(num) : next.add(num);
//       return next;
//     });
//   };

//   return (
//     <Sec
//       num="PART 1 // ACTIVITIES"
//       title={`Employability Activities (${DATA.activities.length})`}
//       sub="In-person engagement across industry sessions, networking, competitive programming, and community leadership during Semester 1."
//     >
//       {DATA.activities.map((a) => (
//         <ActivityCard key={a.num} a={a} open={openSet.has(a.num)} onToggle={() => toggle(a.num)} />
//       ))}
//     </Sec>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  STAR L/P REFLECTION BLOCK
// // ═══════════════════════════════════════════════════════
// function ReflectionBlock({ reflection, idx }) {
//   return (
//     <div className="ep-ref ep-fade">
//       <div className="ep-ref-hd">
//         <span className="ep-ref-tag">REFLECTION {idx}</span>
//         <span className="ep-ref-ttl">{reflection.title}</span>
//       </div>
//       <div className="ep-star">
//         {reflection.sections.map((s, i) => (
//           <div key={i} className="ep-star-it">
//             <div className="ep-star-h">{s.h}</div>
//             <div className="ep-star-t">
//               {s.t.split("\n\n").map((p, j) => (
//                 <p key={j}>{p}</p>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  POST REFLECTION SECTION
// // ═══════════════════════════════════════════════════════
// function PostReflections() {
//   return (
//     <Sec
//       num="PART 2 // POST EMPLOYABILITY PROFILE"
//       title="STAR L/P Reflections"
//       sub="A structured reflection on two key experiences from this semester, and how they shaped my personal and professional development."
//     >
//       {DATA.reflections.map((reflection, i) => (
//         <ReflectionBlock key={i} reflection={reflection} idx={i + 1} />
//       ))}
//     </Sec>
//   );
// }

// // ═══════════════════════════════════════════════════════
// //  MAIN EXPORT
// // ═══════════════════════════════════════════════════════
// export default function EmployabilityProfile() {
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
//       { threshold: 0.06 }
//     );
//     document.querySelectorAll(".ep-fade").forEach((el) => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div className="ep-root">
//       <style>{CSS}</style>
//       <TopBar />
//       <main>
//         <Hero />
//         <PreReflection />
//         <Activities />
//         <PostReflections />
//       </main>
//       <footer className="ep-ft">
//         <span>{DATA.name} · {DATA.studentId}</span>
//         <span>Employability Profile · {DATA.term}</span>
//       </footer>
//     </div>
//   );
// }







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