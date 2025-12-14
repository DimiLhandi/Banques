"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedFade from "./AnimatedFade";
import Button from "./Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTASection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 relative bg-black">
      <AnimatedFade>
        <div className="relative py-6 sm:py-10 md:py-16 lg:py-20 rounded-3xl text-left transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 leading-tight uppercase">
            Prêt à choisir votre banque idéale ?
          </h2>

          <p className="text-muted text-lg md:text-xl max-w-3xl mb-10 leading-relaxed px-4">
            Utilisez notre comparateur intelligent pour trouver la banque qui correspond parfaitement à vos besoins. Filtres, notes, avis — tout est là.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center px-4">
            <Link href="/comparateur" className="w-full md:w-auto">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                <span>Comparer maintenant</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link href="/" className="w-full md:w-auto">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
              >
                Voir toutes les banques
              </motion.button>
            </Link>
          </div>
        </div>
      </AnimatedFade>
    </section>
  );
}

