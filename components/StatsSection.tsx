"use client";

import { motion } from "framer-motion";
import AnimatedFade from "./AnimatedFade";
import {
  CreditCardIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    icon: CreditCardIcon,
    value: "9",
    label: "Banques analysées",
    description: "Les meilleures du marché",
  },
  {
    icon: UserGroupIcon,
    value: "15M+",
    label: "Utilisateurs",
    description: "Font confiance aux banques en ligne",
  },
  {
    icon: ShieldCheckIcon,
    value: "100%",
    label: "Sécurisé",
    description: "Garantie des dépôts jusqu'à 100K€",
  },
  {
    icon: SparklesIcon,
    value: "0€",
    label: "Frais moyens",
    description: "Sur la plupart des opérations",
  },
];

export default function StatsSection() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent rounded-2xl md:rounded-3xl blur-3xl" />

      <div className="relative">
        <AnimatedFade>
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4 uppercase">
              Pourquoi les banques en ligne ?
            </h2>
            <p className="text-muted text-lg md:text-xl max-w-3xl px-4">
              Économies, simplicité et innovation au service de votre argent
            </p>
          </div>
        </AnimatedFade>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedFade key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass p-4 sm:p-7 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30"
              >
                <div className={`stats-icon-animate inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl`} style={{ animationDelay: `${index}s` }}>
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="font-semibold text-base sm:text-lg mb-2">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted">{stat.description}</div>
              </motion.div>
            </AnimatedFade>
          ))}
        </div>

        {/* Additional info cards - Même style que la première ligne */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
          <AnimatedFade delay={0.5}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-4 sm:p-7 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="stats-icon-animate inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" style={{ animationDelay: '4s' }}>
                <BoltIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Ouverture rapide</h3>
              <p className="text-xs sm:text-sm text-muted">
                Créez votre compte en 5 à 15 minutes, 100% en ligne, sans paperasse.
              </p>
            </motion.div>
          </AnimatedFade>
          <AnimatedFade delay={0.6}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-4 sm:p-7 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="stats-icon-animate inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" style={{ animationDelay: '5s' }}>
                <DevicePhoneMobileIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Apps primées</h3>
              <p className="text-xs sm:text-sm text-muted">
                Interfaces modernes, notifications instantanées, gestion simplifiée.
              </p>
            </motion.div>
          </AnimatedFade>
          <AnimatedFade delay={0.7}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-4 sm:p-7 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="stats-icon-animate inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" style={{ animationDelay: '6s' }}>
                <GlobeAltIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Sans frontières</h3>
              <p className="text-xs sm:text-sm text-muted">
                Payez et retirez partout dans le monde avec des frais réduits.
              </p>
            </motion.div>
          </AnimatedFade>
          <AnimatedFade delay={0.8}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-4 sm:p-7 md:p-8 rounded-2xl text-center hover:shadow-glow transition-all duration-300 border border-border hover:border-accent/30"
            >
              <div className="stats-icon-animate inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl" style={{ animationDelay: '7s' }}>
                <LockClosedIcon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-2">Sécurité maximale</h3>
              <p className="text-xs sm:text-sm text-muted">
                Chiffrement bancaire, authentification forte, protection garantie 24/7.
              </p>
            </motion.div>
          </AnimatedFade>
        </div>
      </div>
    </section>
  );
}

