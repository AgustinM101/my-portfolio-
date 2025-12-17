import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="hero-greeting">Hello,</span>

        <h1 className="hero-title">
          I am <span>Agustin Masso</span>, <br />
          Full Stack Developer
        </h1>

        <p className="hero-subtitle">
          Currently building for the future. I love creating functional digital
          experiences on the web.
        </p>
      </motion.div>
    </section>
  );
}
