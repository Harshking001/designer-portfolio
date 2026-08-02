import { motion } from "framer-motion";
import { useState } from "react";
import { contactSection, siteInfo } from "../data";
import "./Contact.css";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  return (
    <section id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="title">
            {contactSection.titlePrefix}{" "}
            <span className="gradient-text">{contactSection.titleHighlight}</span>
          </h2>
          <p className="description">{contactSection.description}</p>
        </motion.div>

        <motion.form
          className="contact-form"
          action={`mailto:${siteInfo.email}`}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="input-group">
            <input
              type="text"
              required
              value={values.name}
              onChange={handleChange("name")}
            />
            <label>{contactSection.fields.name}</label>
          </div>
          <div className="input-group">
            <input
              type="email"
              required
              value={values.email}
              onChange={handleChange("email")}
            />
            <label>{contactSection.fields.email}</label>
          </div>
          <div className="input-group">
            <textarea
              required
              rows="4"
              value={values.message}
              onChange={handleChange("message")}
            />
            <label>{contactSection.fields.message}</label>
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{contactSection.submitLabel}</span>
            <div className="btn-glow" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
