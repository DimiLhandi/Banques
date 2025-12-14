"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TRANSITION_DURATION = 0.7; // Durée cohérente pour toutes les animations
const THEME_CHANGE_DELAY = TRANSITION_DURATION / 2; // Changer le thème à mi-parcours (quand l'overlay recouvre complètement)

// Événement personnalisé pour déclencher la transition
const THEME_TRANSITION_EVENT = "theme-transition-request";

export default function ThemeTransition({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<"up" | "down">("down");
  const [targetTheme, setTargetTheme] = useState<boolean | null>(null);
  const prevThemeRef = useRef<boolean>(true);

  useEffect(() => {
    // Vérifier le thème initial
    const checkTheme = () => {
      if (typeof window === "undefined") return true;
      return !document.body.classList.contains("light-mode");
    };

    const currentTheme = checkTheme();
    setIsDark(currentTheme);
    prevThemeRef.current = currentTheme;

    // Écouter les demandes de transition de thème
    const handleThemeTransition = (event: CustomEvent<{ targetTheme: boolean }>) => {
      const newTheme = event.detail.targetTheme;
      
      // Déterminer la direction de la transition
      // Nuit = de haut en bas (down), Jour = de bas en haut (up)
      const direction = newTheme ? "down" : "up";
      setTransitionDirection(direction);
      setTargetTheme(newTheme);
      setIsTransitioning(true);

      // Changer le thème à mi-parcours (quand l'overlay recouvre complètement)
      setTimeout(() => {
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
        
        setIsDark(newTheme);
        prevThemeRef.current = newTheme;
      }, THEME_CHANGE_DELAY * 1000);

      // Arrêter la transition après l'animation complète
      setTimeout(() => {
        setIsTransitioning(false);
        setTargetTheme(null);
      }, TRANSITION_DURATION * 1000);
    };

    if (typeof window !== "undefined") {
      window.addEventListener(THEME_TRANSITION_EVENT, handleThemeTransition as EventListener);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(THEME_TRANSITION_EVENT, handleThemeTransition as EventListener);
      }
    };
  }, []);

  // Courbe d'animation cohérente et fluide
  const easeCurve = [0.25, 0.1, 0.25, 1]; // easeInOutQuart - très fluide

  // Déterminer la couleur de l'overlay selon le thème cible
  const overlayBackground = targetTheme !== null
    ? (targetTheme
        ? "linear-gradient(to bottom, #000000 0%, #0a0a0a 50%, #000000 100%)"
        : "linear-gradient(to top, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)")
    : (isDark
        ? "linear-gradient(to bottom, #000000 0%, #0a0a0a 50%, #000000 100%)"
        : "linear-gradient(to top, #ffffff 0%, #f5f5f5 50%, #ffffff 100%)");

  return (
    <>
      {/* Overlay de transition - balaie l'écran */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`${transitionDirection}-${targetTheme !== null ? (targetTheme ? "dark" : "light") : (isDark ? "dark" : "light")}`}
            className="fixed inset-0 z-[9999] pointer-events-none"
            initial={{
              y: transitionDirection === "down" ? "-100%" : "100%",
            }}
            animate={{
              y: "0%",
            }}
            exit={{
              y: transitionDirection === "down" ? "100%" : "-100%",
            }}
            transition={{
              duration: TRANSITION_DURATION,
              ease: easeCurve,
            }}
            style={{
              background: overlayBackground,
            }}
          />
        )}
      </AnimatePresence>

      {/* Contenu avec transition synchronisée */}
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={false}
        animate={{
          opacity: isTransitioning ? 0.4 : 1,
          y: isTransitioning ? (transitionDirection === "down" ? -8 : 8) : 0,
        }}
        transition={{
          duration: TRANSITION_DURATION,
          ease: easeCurve,
        }}
        style={{
          willChange: isTransitioning ? "opacity, transform" : "auto",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

// Fonction utilitaire pour déclencher une transition de thème
export function triggerThemeTransition(targetTheme: boolean) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent(THEME_TRANSITION_EVENT, {
      detail: { targetTheme },
    });
    window.dispatchEvent(event);
  }
}

