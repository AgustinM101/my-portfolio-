import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>
          Get in <span>Touch</span>
        </h2>

        <p className="contact-text">
          I'm currently open to new opportunities and collaborations. If you
          want to work together or just say hello, feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:agustinmasso.dev@gmail.com"
            className="contact-btn primary"
          >
            Send Email
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
