"use client";

import { motion } from "framer-motion";
import AnimatedFade from "./AnimatedFade";
import { SparklesIcon, LightBulbIcon } from "@heroicons/react/24/outline";

export default function ComparatorHeader() {
  return (
    <>
      <AnimatedFade>
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"
          >
            <SparklesIcon className="w-8 h-8 text-accent" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Comparateur
            <br />
            <span className="text-accent">intelligent</span>
          </h1>
          <p className="text-muted text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Comparez en un coup d'œil toutes les caractéristiques des 9 banques en ligne.
            <br className="hidden md:block" />
            Utilisez les filtres pour affiner votre recherche.
          </p>
        </div>
      </AnimatedFade>

      <AnimatedFade delay={0.2}>
        <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 rounded-2xl p-6 mb-16 shadow-glow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <LightBulbIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg">💡 Astuce — Comment utiliser ce comparateur ?</h3>
              <p className="text-sm text-muted leading-relaxed">
                <strong className="text-foreground">1.</strong> Utilisez les filtres ci-dessous pour affiner votre recherche (carte gratuite, sans condition de revenus, etc.)
                <br />
                <strong className="text-foreground">2.</strong> Les banques sont automatiquement triées par note décroissante
                <br />
                <strong className="text-foreground">3.</strong> Cliquez sur "Voir" pour accéder à la page détaillée de chaque banque
                <br />
                <strong className="text-foreground">4.</strong> Les icônes vertes ✓ indiquent les points forts, jaunes ⊖ les points neutres
              </p>
            </div>
          </div>
        </div>
      </AnimatedFade>
    </>
  );
}


