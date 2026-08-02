import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { testimonials, testimonialsSection } from "../data";
import { images } from "../assets/images";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {testimonialsSection.title}
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {testimonialsSection.subtitle}
      </motion.p>

      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className={`testi-card ${t.featured ? "featured" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
          >
            <div className="testi-header">
              <div className="stars">★★★★★</div>
              <span className="verify-badge">
                <CheckCircle2 size={14} /> Verified
              </span>
            </div>
            <p className="testi-text">"{t.text}"</p>
            <div className="user-info">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${images[t.image]})` }}
              />
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
