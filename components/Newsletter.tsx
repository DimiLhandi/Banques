"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import AnimatedFade from "./AnimatedFade";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulation d'envoi (remplacer par votre API)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      
      // Reset après 5 secondes
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 relative overflow-hidden bg-black">
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
        {/* Contenu de gauche */}
        <div className="flex-1 max-w-4xl text-left">
          <AnimatedFade>
          {/* Titre */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 leading-tight uppercase">
            Restez informé
          </h2>
          
          <p className="text-muted text-lg md:text-xl mb-10 max-w-3xl leading-relaxed px-4">
            Recevez nos comparatifs exclusifs, conseils bancaires et les meilleures offres directement dans votre boîte mail.
          </p>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-xl px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative group w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  required
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-white/5 border border-border rounded-xl text-sm sm:text-base text-white placeholder-muted focus:outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 group-hover:border-borderLight"
                />
                <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi...
                  </span>
                ) : (
                  "S'inscrire"
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 text-accent py-4 px-4"
            >
              <CheckCircleIcon className="w-8 h-8" />
              <span className="text-xl font-semibold">Merci ! Vous êtes inscrit ✨</span>
            </motion.div>
          )}

          {/* Note légale */}
          <p className="text-muted text-sm mt-4 sm:mt-5 md:mt-6 px-4 text-left">
            Pas de spam. Désinscription en un clic. Vos données sont protégées.
          </p>
        </AnimatedFade>
        </div>

        {/* Logo à droite - visible uniquement sur desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            {/* Logo - Icône seulement avec fond transparent */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-16 h-16 flex items-center justify-center"
            >
              <SparklesIcon className="w-8 h-8 newsletter-logo-icon-color-shift" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

