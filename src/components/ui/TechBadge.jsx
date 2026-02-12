// src/components/ui/TechBadge.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, faNodeJs, faPython, faAws, faJsSquare, faPhp, faJava, faDocker, faGitAlt, faGithub, faHtml5, faCss3Alt, faLinux, faAngular, faVuejs, faSass, faFigma 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faLightbulb, faDatabase, faServer, faCode, faTerminal, faCloud, faCogs, faBolt, faLayerGroup, faTools, faFileCode 
} from "@fortawesome/free-solid-svg-icons";

// Complete fallback icon map
const iconMap = {
  // Frontend
  React: faReact,
  "React.js": faReact,
  "Next.js": faReact,
  Angular: faAngular,
  Vue: faVuejs,
  "HTML / CSS / JS": faHtml5,
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJsSquare,
  Tailwind: faCode,
  Sass: faSass,
  Figma: faFigma,

  // Backend
  "Node.js": faNodeJs,
  NodeJS: faNodeJs,
  Express: faServer,
  Python: faPython,
  Django: faPython,
  Java: faJava,
  PHP: faPhp,
  RESTfulAPI: faServer,
  GraphQL: faBolt,

  // Database
  PostgreSQL: faDatabase,
  MySQL: faDatabase,
  MongoDB: faDatabase,
  Firebase: faDatabase,
  Redis: faDatabase,
  SQLite: faDatabase,

  // DevOps / Tools
  Docker: faDocker,
  Git: faGitAlt,
  "Git / GitHub": faGithub,
  Linux: faLinux,
  CI_CD: faCogs,
  AWS: faAws,
  Cloud: faCloud,
  Terminal: faTerminal,
  Vite: faCode,
  Render: faCloud,
  Netlify: faCloud,
  "Prisma / PostgreSQL": faDatabase,
  "System Design": faLayerGroup,
  Tools: faTools,
  Learning: faLightbulb,

  // Fallback
  default: faFileCode,
};

export default function TechBadge({ name, icon }) {
  // 1️⃣ Use icon passed as prop
  // 2️⃣ Use iconMap fallback
  // 3️⃣ Use default file/code icon
  const finalIcon = icon || iconMap[name] || iconMap.default;

  return (
    <div className="tech-badge">
      <FontAwesomeIcon icon={finalIcon} size="sm" />
      <span>{name}</span>
    </div>
  );
}