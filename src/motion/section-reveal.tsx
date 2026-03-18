import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer } from "@/motion/presets";

type SectionRevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: React.ReactNode;
  viewportAmount?: number;
  once?: boolean;
};

export function SectionReveal({
  children,
  viewportAmount = 0.25,
  once = true,
  ...props
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: viewportAmount }}
      variants={staggerContainer(reduceMotion)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
