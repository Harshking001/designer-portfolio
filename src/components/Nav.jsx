import { motion } from "framer-motion";
import { House, Layers, Files, Send } from "lucide-react";
import { navItems } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Nav.css";

const ICONS = { House, Layers, Files, Send };

export default function Nav() {
  const ids = navItems.map((n) => n.id);
  const active = useActiveSection(ids);

  return (
    <motion.nav
      className="navigation"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <ul className="nav-links">
        {navItems.map((item) => {
          const Icon = ICONS[item.icon];
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={isActive ? "active" : ""}
                aria-label={item.id}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
