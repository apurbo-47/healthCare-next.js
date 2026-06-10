"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const variants = {
    initial: {
      opacity: 0,
      y: 18, 
      scale: 0.985, 
      filter: "blur(2px)", 
    },

    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },

    exit: {
      opacity: 0,
      y: -18, 
      scale: 0.985,
      filter: "blur(2px)",
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.65, 
          ease: [0.34, 1.56, 0.64, 1],
        }}
        style={{
          minHeight: "100vh",
          willChange: "transform, opacity, filter",
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
