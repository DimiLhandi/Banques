"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const banks = [
  { name: "Fortuneo", color: "#FF6B35" },
  { name: "Monabanq", color: "#FF8C50" },
  { name: "Trade Republic", color: "#FFB366" },
  { name: "Hello Bank!", color: "#FF7A1A" },
  { name: "BforBank", color: "#FF9A56" },
  { name: "BoursoBank", color: "#FFA366" },
  { name: "Wise", color: "#FF6F3D" },
  { name: "Revolut", color: "#FF8547" },
  { name: "N26", color: "#FFA570" },
];

export default function FloatingBankCardsFan() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentBanks, setCurrentBanks] = useState(banks);
  
  // Faire tourner les cartes toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanks((prev) => {
        // Déplacer la première carte à la fin
        const newBanks = [...prev.slice(1), prev[0]];
        return newBanks;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  // Calculer l'angle et la position pour chaque carte en éventail
  const totalCards = currentBanks.length;
  const spreadAngle = 100; // Angle total de l'éventail en degrés pour bien voir toutes les cartes
  const baseRotation = -spreadAngle / 2; // Commencer à gauche

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-visible pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {currentBanks.map((bank, index) => {
            // Calculer la rotation pour cette carte
            const rotation = baseRotation + (spreadAngle / (totalCards - 1)) * index;
            
            // Décalage vertical pour créer un effet d'arc prononcé
            const verticalOffset = Math.abs(index - (totalCards - 1) / 2) * -35;
            
            // Décalage horizontal minimal - cartes vraiment empilées au centre
            const horizontalOffset = (index - (totalCards - 1) / 2) * 5;
            
            // Si une carte est survolée, agrandir celle-ci légèrement
            const isHovered = hoveredIndex === index;
            const scale = isHovered ? 1.08 : 1;
            const zIndex = isHovered ? 20 : 10 - Math.abs(index - (totalCards - 1) / 2);

            return (
              <motion.div
                key={`${bank.name}-${index}`}
                className="absolute floating-card pointer-events-auto"
                initial={{ 
                  opacity: 0, 
                  y: 150,
                  rotateZ: rotation,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: horizontalOffset,
                  rotateZ: rotation,
                  rotateY: isHovered ? 0 : -3,
                  rotateX: isHovered ? 0 : 2,
                  scale: scale,
                }}
                exit={{
                  opacity: 0,
                  y: -150,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                transition={{
                  opacity: { duration: 0.6 },
                  y: { duration: 0.8, ease: "easeOut" },
                  x: { duration: 0.5 },
                  rotateZ: { duration: 0.5 },
                  rotateY: { duration: 0.3 },
                  rotateX: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                style={{
                  zIndex: zIndex,
                  transform: `translateY(${verticalOffset}px)`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <div className="card-inner">
                <div className="card-shine" />
                {/* Puce dorée EMV */}
                <div className="card-chip"></div>
                <div className="card-content-top-right">
                  <span className="bank-name-float-fixed">
                    {bank.name.split('').map((letter, letterIndex) => (
                      <span
                        key={`${index}-${letterIndex}`}
                        className="bank-letter-glow"
                        style={{
                          animationDelay: `${letterIndex * 0.35}s`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
        </AnimatePresence>
      </div>
    </div>
  );
}

