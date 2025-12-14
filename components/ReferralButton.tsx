"use client";

import { motion } from "framer-motion";
import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ReferralButton() {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent via-accentHover to-accent rounded-2xl text-black font-bold text-lg shadow-[0_4px_20px_rgba(255,122,26,0.4)] hover:shadow-[0_6px_30px_rgba(255,122,26,0.6)] transition-all duration-300 border-2 border-accent/50"
    >
      <SparklesIcon className="w-6 h-6 newsletter-logo-icon-color-shift" />
      <span>LIEN DE PARRAINAGE</span>
      <ArrowRightIcon className="w-5 h-5" />
    </motion.a>
  );
}

