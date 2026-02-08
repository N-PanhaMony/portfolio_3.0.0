export default function TechBadge({ skill }) {
  return (
    <div className="tech-badge">
      <p>{skill.name}</p>
      <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
    </div>
  );
}