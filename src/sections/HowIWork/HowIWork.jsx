import { motion } from "framer-motion";
import "./HowIWork.css";

const steps = [
  {
    title: "Planning",
    text: "Understanding the problem, defining goals and choosing the right tools.",
  },
  {
    title: "Design",
    text: "Creating wireframes and UI structure with usability and clarity in mind.",
  },
  {
    title: "Development",
    text: "Writing clean, scalable code and turning ideas into real products.",
  },
  {
    title: "Deploy & Improve",
    text: "Deploying, testing, optimizing and iterating continuously.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="how">
      <div className="how-header">
        <h2>
          How <span>I Work</span>
        </h2>
        <p>My process to build efficient and scalable web solutions.</p>
      </div>

      <div className="how-grid">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="how-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <span className="how-step">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
