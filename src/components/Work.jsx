import { motion } from "framer-motion";
import { projects, workSection } from "../data";
import "./Work.css";

export default function Work() {
  return (
    <section id="work">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{workSection.title}</h2>
        <p>{workSection.subtitle}</p>
      </motion.div>

      <div className="project-list">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-info">
              <h3>
                {project.number} / {project.name}
              </h3>
              <p>{project.category}</p>
            </div>
            <div className="p-image">Project Preview</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
