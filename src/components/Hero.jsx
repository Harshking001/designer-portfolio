import { motion } from "framer-motion";
import { hero } from "../data";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div className="badge" variants={item}>
          {hero.badge}
        </motion.div>
        <motion.h1 variants={item}>
          {hero.titlePrefix} <span>{hero.titleHighlight}</span> {hero.titleSuffix}
        </motion.h1>
        <motion.p className="hero-subtext" variants={item}>
          {hero.subtext}
        </motion.p>
        <motion.div className="scroll-indicator" variants={item}>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          >
            {hero.scrollLabel}
          </motion.span>
          <div className="line" />
        </motion.div>
      </motion.div>
    </section>
  );
}
