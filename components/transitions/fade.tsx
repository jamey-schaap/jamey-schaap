import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

type FadeProps = {
  children?: ReactNode | null;
};

const Fade = ({ children }: FadeProps) => (
  <motion.article
    initial="hidden"
    animate="enter"
    variants={variants}
    transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
    style={{ position: "relative" }}
  >
    {children}
  </motion.article>
);

export default Fade;
