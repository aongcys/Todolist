import { Variants } from "framer-motion";
import { easeIn } from "framer-motion";

export const sectionvariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeIn } },
};
