"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Bank } from "@/lib/data/banks";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

interface BankCardProps {
  bank: Bank;
  index?: number;
}

export default function BankCard({ bank, index = 0 }: BankCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/banque/${bank.slug}`}>
        <motion.div
          className="group relative glass p-5 sm:p-6 md:p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Image de fond pour chaque banque */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              backgroundImage: `url('/banks/${bank.slug}.jpg')`,
              filter: 'blur(0.6px)',
            }}
          />
          
          {/* Hover gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Bank name */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-colors">
              <span className="bank-card-title">
                {bank.name.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h3>

            {/* Tagline */}
            <p className="text-muted text-sm mb-4 line-clamp-2">{bank.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
              <svg width="0" height="0" style={{position: 'absolute'}}>
                <defs>
                  <linearGradient id="starGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFD700" /> {/* Gold */}
                    <stop offset="50%" stopColor="#FFA500" /> {/* Orange */}
                    <stop offset="100%" stopColor="#FFD700" /> {/* Gold */}
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`bank-card-star w-4 h-4 ${i < Math.floor(bank.rating) ? "star-filled star-glow-animation" : "text-border"}`}
                    fill={i < Math.floor(bank.rating) ? "url(#starGoldGradient)" : "currentColor"}
                    viewBox="0 0 20 20"
                    style={i < Math.floor(bank.rating) ? { animationDelay: `${i * 0.2}s` } : undefined}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-accent">{bank.rating}/5</span>
            </div>

            {/* Key features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-muted">Carte {bank.features.cardFee}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-muted">{bank.features.support}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircleIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-muted">App {bank.features.app.split(" ")[0]}</span>
              </div>
            </div>

            {/* CTA Button - Style glassmorphism identique à la bannière */}
            <motion.div
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Découvrir en détail</span>
              <ArrowRightIcon className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

