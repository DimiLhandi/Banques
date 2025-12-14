"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedFade from "./AnimatedFade";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center pt-12 pb-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10">
        <AnimatedFade>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold mb-10 shadow-glow cursor-default"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>9 banques analysées — Comparateur intelligent</span>
          </motion.div>
        </AnimatedFade>

        <AnimatedFade delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Comparez les meilleures
            <br />
            <span className="bg-gradient-to-r from-accent via-accentHover to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              banques en ligne
            </span>
          </h1>
        </AnimatedFade>

        <AnimatedFade delay={0.2}>
          <p className="text-muted text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Design minimaliste. Clarté absolue. Filtres intelligents.
            <br className="hidden md:block" />
            Trouvez la banque parfaite en 5 minutes.
          </p>
        </AnimatedFade>

        <AnimatedFade delay={0.3}>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/comparateur">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 107, 53, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-accent text-black rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-3"
              >
                <span>Comparer maintenant</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#banques">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 107, 53, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-card/50 backdrop-blur text-foreground rounded-xl font-semibold text-lg border border-border hover:border-accent/50 transition-all duration-300"
              >
                Explorer les banques
              </motion.button>
            </Link>
          </div>
        </AnimatedFade>

        <AnimatedFade delay={0.4}>
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>100% Gratuit</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Sans engagement</span>
            </div>
            <div className="w-1 h-1 bg-border rounded-full" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Données 2024</span>
            </div>
          </div>
        </AnimatedFade>
      </div>
    </section>
  );
}


