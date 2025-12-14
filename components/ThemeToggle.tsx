"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Vérifier le thème sauvegardé - Mode sombre par défaut
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.add("light-mode");
    } else {
      // Mode sombre par défaut
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      // Mode sombre
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      // Mode clair
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full glass border border-border/50 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10"
        animate={{
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle ball avec glassmorphism */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xl shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 4 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icône */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <MoonIcon className="w-4 h-4 text-accent" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <SunIcon className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
      
      {/* Icônes de fond */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.div
          animate={{
            opacity: isDark ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        >
          <MoonIcon className="w-3.5 h-3.5 text-foreground/50" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0.1 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        >
          <SunIcon className="w-3.5 h-3.5 text-foreground/50" />
        </motion.div>
      </div>
      
      {/* Effet de glow au survol */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent" />
    </motion.button>
  );
}

