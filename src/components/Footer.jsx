import { motion } from "framer-motion";
import { WhatsAppIcon, GithubIcon, InstagramIcon } from "./BrandIcons";
import { footer } from "../data";
import "./Footer.css";

const ICONS = {
  MessageCircle: WhatsAppIcon,
  Github: GithubIcon,
  Instagram: InstagramIcon,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{footer.brand}</h3>
          <p>{footer.tagline}</p>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {footer.socials.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a
                key={s.id}
                href={s.href}
                className="social-icon"
                aria-label={s.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </div>
      <div className="footer-bottom">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
