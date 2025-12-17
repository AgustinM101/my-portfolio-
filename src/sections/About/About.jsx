import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I'm a developer focused on building clean, functional and scalable
            web applications. I enjoy transforming ideas into real products and
            constantly learning new technologies to improve my workflow.
          </p>

          <p>
            My background combines frontend development, backend fundamentals
            and UI planning, allowing me to understand projects from concept to
            deployment.
          </p>
        </div>

        <div className="about-highlights">
          <div className="about-item">
            <h3>Problem Solver</h3>
            <p>Focused on finding practical and efficient solutions.</p>
          </div>

          <div className="about-item">
            <h3>Continuous Learner</h3>
            <p>Always improving skills and exploring new technologies.</p>
          </div>

          <div className="about-item">
            <h3>Full Stack Mindset</h3>
            <p>Understanding both frontend and backend perspectives.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
