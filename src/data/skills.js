// src/data/skills.js
import { faLaptopCode, faServer, faTools, faLightbulb, faDatabase, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faPython, faAws, faGit, faDocker, faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

export const skillsData = [
  {
    category: "Frontend",
    icon: faLaptopCode, // category icon
    skills: [
      { name: "HTML / CSS / JS", icon: faHtml5, level: "Advanced" },      // HTML icon for HTML/CSS/JS
      { name: "Tailwind", icon: faCss3, level: "Beginner" },          // JS icon fallback for Tailwind
      { name: "React", icon: faReact, level: "Intermediate" },            // React icon
      { name: "Next.js", icon: faReact, level: "Beginner" },              // Next.js uses React icon
    ],
  },
  {
    category: "Backend",
    icon: faServer,
    skills: [
      { name: "Node.js", icon: faNodeJs, level: "Advanced" },             // Node.js icon
      { name: "Express", icon: faNodeJs, level: "Advanced" },             // Express uses Node icon
      { name: "Prisma / PostgreSQL", icon: faDatabase, level: "Beginner" }, // Database icon
      { name: "Firebase", icon: faAws, level: "Beginner" },               // AWS icon for Firebase (close match)
    ],
  },
  {
    category: "Tools & DevOps",
    icon: faTools,
    skills: [
      { name: "Git / GitHub", icon: faGit, level: "Advanced" },           // Git icon
      { name: "Docker", icon: faDocker, level: "Beginner" },              // Docker icon
      { name: "Render / Vercel / Netlify", icon: faServer, level: "Intermediate" }, // Server icon as generic
      { name: "CI/CD", icon: faCogs, level: "Learning" },                 // Cogs for automation pipelines
    ],
  },
  {
    category: "Exploring",
    icon: faLightbulb,
    skills: [
      { name: "System Design", icon: faCogs, level: "Learning" },         // Cogs better than layer group
      { name: "AWS", icon: faAws, level: "Learning" },                     // AWS icon
      { name: "Python / Django", icon: faPython, level: "Learning" },     // Python icon
      { name: "Go", icon: faLightbulb, level: "Learning" },               // Lightbulb for learning new language
    ],
  },
];