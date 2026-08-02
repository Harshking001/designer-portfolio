import { motion } from "framer-motion";
import { skills, skillsSection } from "../data";
import "./Skills.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {skillsSection.title} <span className="gradient-text">{skillsSection.titleHighlight}</span>
          </h2>
          <p>{skillsSection.subtitle}</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              style={{ "--color": skill.color }}
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="icon">{skill.icon}</div>
              <h3>{skill.label}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
