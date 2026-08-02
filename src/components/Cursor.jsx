import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.css";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const [scale, setScale] = useState(1);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  useEffect(() => {
    if (!enabled) return;
    const interactiveSelector =
      "a, button, .project-item, .skill-card, .testi-card, .blog-card";

    const onOver = (e) => {
      if (e.target.closest(interactiveSelector)) setScale(4);
    };
    const onOut = (e) => {
      if (e.target.closest(interactiveSelector)) setScale(1);
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      id="cursor"
      style={{ x: springX, y: springY, scale }}
      transition={{ scale: { type: "spring", damping: 15, stiffness: 300 } }}
    />
  );
}
