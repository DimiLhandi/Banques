"use client";

import { motion } from "framer-motion";
import FloatingBankCards from "./FloatingBankCards";

export default function HeroBanner() {
  return (
    <div className="hero-banner mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      {/* Cartes bancaires 3D flottantes */}
      <FloatingBankCards />
      
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold mb-3 md:mb-6"
        >
          <span className="badge-text-wave">
            {"Plateforme Premium".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-white uppercase"
        >
          Trouvez la meilleure<br />banque en ligne en 2024
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl"
        >
          Comparaison objective et indépendante des meilleures banques en ligne pour vous aider à faire le bon choix. Profitez de notre expertise et de notre analyse détaillée des offres pour choisir la banque en ligne qui correspond parfaitement à vos besoins et à votre profil financier.
        </motion.p>
      </div>
    </div>
  );
}
