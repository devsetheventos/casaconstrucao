import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

export function staggerContainer(reduceMotion: boolean | null | undefined): Variants {
  const rm = reduceMotion ?? false;

  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: rm ? 0 : 0.04,
        staggerChildren: rm ? 0 : 0.08,
      },
    },
  };
}

export function fadeUp(reduceMotion: boolean | null | undefined): Variants {
  const rm = reduceMotion ?? false;

  return {
    hidden: { opacity: 0, y: rm ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.24, ease: EASE_OUT } },
  };
}

export function fade(reduceMotion: boolean | null | undefined): Variants {
  const rm = reduceMotion ?? false;

  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: rm ? 0 : 0.22, ease: EASE_OUT },
    },
  };
}

export function fadeLeft(reduceMotion: boolean | null | undefined): Variants {
  const rm = reduceMotion ?? false;

  return {
    hidden: { opacity: 0, x: rm ? 0 : 14 },
    show: { opacity: 1, x: 0, transition: { duration: 0.26, ease: EASE_OUT } },
  };
}

export function fadeRight(reduceMotion: boolean | null | undefined): Variants {
  const rm = reduceMotion ?? false;

  return {
    hidden: { opacity: 0, x: rm ? 0 : -14 },
    show: { opacity: 1, x: 0, transition: { duration: 0.26, ease: EASE_OUT } },
  };
}

export function pressableTransition(reduceMotion: boolean | null | undefined) {
  const rm = reduceMotion ?? false;

  return rm
    ? { duration: 0 }
    : { duration: 0.14, ease: EASE_IN_OUT };
}
