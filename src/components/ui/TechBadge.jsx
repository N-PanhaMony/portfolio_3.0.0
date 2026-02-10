import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faPython, faAws } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  React: faReact,
  NodeJS: faNodeJs,
  Python: faPython,
  AWS: faAws,
  PostgreSQL: faDatabase,
  RESTfulAPI: faServer,
};

export default function TechBadge({ name }) {
  const icon = iconMap[name] || faServer;
  return (
    <div className="tech-badge">
      <FontAwesomeIcon icon={icon} size="sm" />
      <span>{name}</span>
    </div>
  );
}