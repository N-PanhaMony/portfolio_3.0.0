// src/components/ui/TechBadge.jsx

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faDocker,
//   faGitAlt,
  faGithub,
  faAws
} from "@fortawesome/free-brands-svg-icons";

import {
//   faServer,
//   faDatabase,
  faCloud,
  faCogs,
  faLayerGroup,
  faCode,
  faFileCode
} from "@fortawesome/free-solid-svg-icons";

/* 🔥 Real Brand Icons (Simple Icons via react-icons) */
import {
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiGo,
  SiExpress,
  SiPrisma
} from "react-icons/si";

const iconMap = {
  /* ==========================
     FRONTEND
  ========================== */
  React: <FontAwesomeIcon icon={faReact} size="sm" />,
  "Next.js": <FontAwesomeIcon icon={faReact} size="sm" />,
  "HTML / CSS / JS": <FontAwesomeIcon icon={faCode} size="sm" />,
  Tailwind: <SiTailwindcss size={14} />,

  /* ==========================
     BACKEND
  ========================== */
  "Node.js": <FontAwesomeIcon icon={faNodeJs} size="sm" />,
  Express: <SiExpress size={14} />,
  "Prisma / PostgreSQL": <SiPostgresql size={14} />,
  Firebase: <SiFirebase size={14} />,

  /* ==========================
     DEVOPS
  ========================== */
  Docker: <FontAwesomeIcon icon={faDocker} size="sm" />,
  "Git / GitHub": <FontAwesomeIcon icon={faGithub} size="sm" />,
  Render: <FontAwesomeIcon icon={faCloud} size="sm" />,
  "CI/CD": <FontAwesomeIcon icon={faCogs} size="sm" />,

  /* ==========================
     EXPLORING
  ========================== */
  "System Design": <FontAwesomeIcon icon={faLayerGroup} size="sm" />,
  AWS: <FontAwesomeIcon icon={faAws} size="sm" />,
  "Python / Django": <FontAwesomeIcon icon={faCode} size="sm" />,
  Go: <SiGo size={14} />,

  /* ==========================
     DEFAULT
  ========================== */
  default: <FontAwesomeIcon icon={faFileCode} size="sm" />,
};

export default function TechBadge({ name }) {
  const iconComponent = iconMap[name] || iconMap.default;

  return (
    <div className="tech-badge">
      {iconComponent}
      <span>{name}</span>
    </div>
  );
}