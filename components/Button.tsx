"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
}

export default function Button({ children, onClick, variant = "primary", className = "", href }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-accent text-black hover:bg-accent/90 shadow-lg hover:shadow-xl",
    secondary: "bg-card text-foreground border border-border hover:border-accent/50",
  };

  const Component = motion.button;

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}


