"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedFade({ children, delay = 0, className = "" }: AnimatedFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


