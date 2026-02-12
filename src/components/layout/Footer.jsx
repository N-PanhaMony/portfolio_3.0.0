export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: "1rem 1.5rem",
        textAlign: "center",
        color: "var(--color-secondary-text)",
        fontSize: "0.9rem",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        &copy; {currentYear} MoNi. All rights reserved.
      </div>
    </footer>
  );
}