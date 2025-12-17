import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    size: "xl",
    x: -180,
    y: -80,
  },
  {
    name: "React",
    url: "https://react.dev",
    size: "xxl",
    x: 80,
    y: -140,
  },
  {
    name: "C++",
    url: "https://cplusplus.com",
    size: "md",
    x: 260,
    y: -60,
  },
  {
    name: "Git",
    url: "https://git-scm.com",
    size: "lg",
    x: -260,
    y: 40,
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
    size: "lg",
    x: 200,
    y: 80,
  },
  {
    name: "PHP",
    url: "https://www.php.net",
    size: "md",
    x: -140,
    y: 160,
  },
  {
    name: "Postman",
    url: "https://www.postman.com",
    size: "md",
    x: 120,
    y: 180,
  },
  {
    name: "Python",
    url: "https://www.python.org",
    size: "lg",
    x: -320,
    y: -140,
  },
  {
    name: "Firebase",
    url: "https://firebase.google.com",
    size: "lg",
    x: 320,
    y: -120,
  },
  {
    name: "MySQL",
    url: "https://www.mysql.com",
    size: "md",
    x: 360,
    y: 20,
  },
  {
    name: "Mantine UI",
    url: "https://mantine.dev",
    size: "sm",
    x: -360,
    y: 220,
  },
  {
    name: "Material UI",
    url: "https://mui.com",
    size: "sm",
    x: 360,
    y: 220,
  },
  {
    name: "Figma",
    url: "https://www.figma.com",
    size: "md",
    x: 0,
    y: 260,
  },
  {
    name: "REST APIs",
    url: "https://restfulapi.net",
    size: "sm",
    x: -200,
    y: 300,
  },
  {
    name: "Axios",
    url: "https://axios-http.com",
    size: "sm",
    x: 200,
    y: 300,
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com",
    size: "sm",
    x: -80,
    y: 340,
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    size: "sm",
    x: 80,
    y: 360,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>
          <span>Skills</span> and tools
        </h2>
        <p>
          I'm a multi-skilled developer, feel free to check the tools that I
          have used a lot.
        </p>
      </div>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <motion.a
            key={skill.name}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`skill-item ${skill.size}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 0.6,
              x: skill.x,
              y: skill.y,
            }}
            animate={{
              y: skill.y + 12,
            }}
            transition={{
              opacity: { duration: 0.8 },
              y: {
                duration: 6 + index,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            {skill.name}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
