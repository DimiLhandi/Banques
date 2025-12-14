"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

export default function FloatingBankCards() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Dupliquer les banques pour l'effet de boucle infinie
  const duplicatedBanks = [...banks, ...banks, ...banks];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Rangée unique - défilement de gauche à droite */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-cards-container">
          <div 
            className="floating-cards-track" 
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {duplicatedBanks.map((bank, index) => (
              <motion.div
                key={`row1-${index}`}
                className="floating-card"
                initial={{ 
                  opacity: 0, 
                  y: 80,
                  rotateY: -5, 
                  rotateX: 2 
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: [-5, -3, -5],
                  rotateX: [2, 3, 2],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.08 },
                  y: { duration: 0.8, delay: index * 0.08, ease: "easeOut" },
                  rotateY: {
                    duration: 3,
                    repeat: Infinity,
                    delay: 1 + index * 0.2,
                    ease: "easeInOut",
                  },
                  rotateX: {
                    duration: 3,
                    repeat: Infinity,
                    delay: 1 + index * 0.2,
                    ease: "easeInOut",
                  },
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
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
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

