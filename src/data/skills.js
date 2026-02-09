import { faReact, faNodeJs, faAws } from "@fortawesome/free-brands-svg-icons";
import {faTools } from "@fortawesome/free-solid-svg-icons";

export const skillsData = [
  {
    category: "Frontend",
    icon: faReact,
    color: "#61dafb", // React blue as accent
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Intermediate" },
      { name: "Tailwind / FantaCSS", level: "Intermediate" },
      { name: "HTML / CSS / JS", level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    icon: faNodeJs,
    color: "#8cc84b", // Node green
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Intermediate" },
      { name: "Prisma", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "Firebase", level: "Learning" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: faTools,
    color: "#f7b500",
    skills: [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Docker", level: "Learning" },
      { name: "CI/CD", level: "Intermediate" },
      { name: "Render / Vercel / Netlify", level: "Intermediate" },
    ],
  },
  {
    category: "Learning / Exploring",
    icon: faAws,
    color: "#ff9900",
    skills: [
      { name: "Kubernetes", level: "Learning" },
      { name: "AWS", level: "Learning" },
      { name: "System Design", level: "Learning" },
    ],
  },
];