import { motion } from "framer-motion";
import { hero } from "../data";
import "./Hero.css";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {

  const textRef = useRef(null);

  useLayoutEffect(() => {
    const split = new SplitText(textRef.current, {
      type: "chars",
    });

    let tl = gsap.timeline({repeat: -1,yoyo: true})

    tl.from(split.chars, {
      opacity: 0,
      x: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    tl.from(split.chars,{
      y: 20,
      stagger: 0.1,
      ease: 'sine.out',
    })

    tl.from(split.chars,{
      rotate: 360,
      stagger: 0.1,
      ease: 'sine.out',
    })



    return () => {
      split.revert();
    };
  }, []);

  return (
    <section id="hero">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div className="badge" variants={item}>
          {hero.badge}
        </motion.div>

        <motion.h1 ref={textRef} variants={item}>
          {hero.titlePrefix}{" "}
          <span>{hero.titleHighlight}</span>{" "}
          {hero.titleSuffix}
        </motion.h1>

        <motion.p className="hero-subtext" variants={item}>
          {hero.subtext}
        </motion.p>

        <motion.div className="scroll-indicator" variants={item}>
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
          >
            {hero.scrollLabel}
          </motion.span>

          <div className="line" />
        </motion.div>
      </motion.div>
    </section>
  );
}