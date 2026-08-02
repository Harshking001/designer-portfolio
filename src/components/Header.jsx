import { motion } from "framer-motion";
import { SunMoon } from "lucide-react";
import { siteInfo } from "../data";
import "./Header.css";

export default function Header({ theme, onToggleTheme }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="logo">
        {siteInfo.logoText}
        <span>{siteInfo.logoMark}</span>
      </div>
      <div className="nav-controls">
        <button
          id="theme-toggle"
          aria-label="Toggle color theme"
          onClick={onToggleTheme}
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ display: "inline-flex" }}
          >
            <SunMoon size={22} />
          </motion.span>
        </button>
        <a href={`mailto:${siteInfo.email}`} className="hire-btn">
          {siteInfo.hireLabel}
        </a>
      </div>
    </motion.header>
  );
}
