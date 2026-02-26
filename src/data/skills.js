// src/data/skills.js
import { faLaptopCode, faServer, faTools, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export const skillsData = [
  {
    category: "Frontend",
    icon: faLaptopCode,
    skills: [
      { name: "HTML / CSS / JS", level: "Advanced" },
      { name: "Tailwind", level: "Beginner" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Beginner" },
    ],
  },
  {
    category: "Backend",
    icon: faServer,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express", level: "Advanced" },
      { name: "Prisma / PostgreSQL", level: "Beginner" },
      { name: "Firebase", level: "Beginner" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: faTools,
    skills: [
      { name: "Git / GitHub", level: "Advanced" },
      { name: "Docker", level: "Beginner" },
      { name: "Render", level: "Beginner" },
      { name: "CI/CD", level: "Learning" },
    ],
  },
  {
    category: "Exploring",
    icon: faLightbulb,
    skills: [
      { name: "System Design", level: "Learning" },
      { name: "AWS", level: "Learning" },
      { name: "Python / Django", level: "Learning" },
      { name: "Go", level: "Learning" },
    ],
  },
];