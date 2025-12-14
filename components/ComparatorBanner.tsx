"use client";

import { motion } from "framer-motion";
import FloatingBankCardsFan from "./FloatingBankCardsFan";

export default function ComparatorBanner() {
  return (
    <div className="comparator-banner mb-8">
      {/* Cartes bancaires 3D en éventail */}
      <FloatingBankCardsFan />
      
      <div className="comparator-banner-content">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-sm font-semibold mb-3 md:mb-6"
        >
          <span className="badge-text-wave">
            {"Comparateur Intelligent Premium".split("").map((char, index) => (
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
          Comparez les 9 meilleures<br />banques en ligne en 2024
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-3xl"
        >
          Tableau comparatif interactif avec filtres intelligents pour analyser les frais, services et conditions de chaque banque. Utilisez nos outils de comparaison avancés pour trouver la banque en ligne qui correspond parfaitement à vos besoins en quelques minutes.
        </motion.p>
      </div>
    </div>
  );
}

