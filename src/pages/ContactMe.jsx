// src/pages/ContactMe.jsx
export default function ContactMe() {
  return (
    <section className="container">
      <h1>Contact Me</h1>

      <p>
        Let’s connect!
      </p>

      <form
        action="mailto:your-email@example.com"
        method="post"
        encType="text/plain"
        style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px" }}
      >
        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Message:
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
          Send
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        <p>Or reach me on social media:</p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://github.com/yourusername" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
          <a href="https://instagram.com/yourusername" target="_blank">Instagram</a>
        </div>
      </div>
    </section>
  );
}
