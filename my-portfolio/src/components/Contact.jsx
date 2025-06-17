export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required /><br />
        <input type="email" placeholder="Your Email" required /><br />
        <textarea placeholder="Your Message" required></textarea><br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
