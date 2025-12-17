import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="project-tech">
          {tech.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
