"use client";

import { useState, useMemo } from "react";
import banks from "@/lib/data/banks";
import AnimatedFade from "./AnimatedFade";
import FilterBar, { FilterOptions } from "./FilterBar";
import Link from "next/link";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function CompareTableAdvanced() {
  const [filters, setFilters] = useState<FilterOptions>({
    cardFree: false,
    noMinIncome: false,
    international: false,
    premiumSupport: false,
    highRating: false,
  });

  const filteredBanks = useMemo(() => {
    return banks.filter((bank) => {
      if (filters.cardFree && !bank.features.cardFee.toLowerCase().includes("gratuite")) {
        return false;
      }
      if (filters.noMinIncome && bank.features.minIncome !== "Aucun") {
        return false;
      }
      if (filters.international && !["Wise", "Revolut", "N26"].includes(bank.name)) {
        return false;
      }
      if (filters.premiumSupport && !bank.features.support.includes("dédié") && !bank.features.support.includes("24/7")) {
        return false;
      }
      if (filters.highRating && bank.rating < 4.5) {
        return false;
      }
      return true;
    }).sort((a, b) => b.rating - a.rating);
  }, [filters]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const getFeatureIcon = (value: string, type: "card" | "income" | "withdraw" | "support") => {
    if (type === "card") {
      if (value.toLowerCase().includes("gratuite")) {
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      }
      return <MinusCircleIcon className="w-5 h-5 text-yellow-500" />;
    }
    if (type === "income") {
      if (value === "Aucun") {
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      }
      return <MinusCircleIcon className="w-5 h-5 text-yellow-500" />;
    }
    if (type === "withdraw") {
      if (value.toLowerCase().includes("gratuits")) {
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      }
      return <MinusCircleIcon className="w-5 h-5 text-yellow-500" />;
    }
    if (type === "support") {
      if (value.includes("24/7") || value.includes("dédié")) {
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      }
      return <MinusCircleIcon className="w-5 h-5 text-yellow-500" />;
    }
    return null;
  };

  return (
    <div>
      <FilterBar filters={filters} onFilterChange={setFilters} activeCount={activeFilterCount} />

      {filteredBanks.length === 0 ? (
        <AnimatedFade>
          <div className="text-center py-20 glass rounded-2xl">
            <XCircleIcon className="w-16 h-16 text-muted mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Aucune banque trouvée</h3>
            <p className="text-muted">Essayez de modifier vos filtres</p>
          </div>
        </AnimatedFade>
      ) : (
        <AnimatedFade>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border-2 border-accent/30 backdrop-blur-xl"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent via-accentHover to-accent shadow-lg">
              <SparklesIcon className="w-6 h-6 newsletter-logo-icon-color-shift" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {filteredBanks.length}
                </span>
                <span className="text-base md:text-lg text-white/90 font-medium">
                  banque{filteredBanks.length > 1 ? "s" : ""} trouvée{filteredBanks.length > 1 ? "s" : ""}
                </span>
              </div>
              {activeFilterCount > 0 && (
                <p className="text-xs md:text-sm text-muted mt-1">
                  {activeFilterCount} filtre{activeFilterCount > 1 ? "s" : ""} actif{activeFilterCount > 1 ? "s" : ""}
                </p>
              )}
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-accent/20"
            >
              <CheckCircleIcon className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
          <div className="rounded-2xl border-2 border-accent/50 overflow-hidden bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm">
            <div className="overflow-x-auto modern-scrollbar-glass">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-accent/10">
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30 sticky left-0 bg-accent/10 z-10">
                      Banque
                    </th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30">Note</th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30">Carte</th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30">
                      Revenus min
                    </th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30">Retraits</th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40 border-r-2 border-accent/30">Support</th>
                    <th className="text-left py-3 px-3 sm:py-4 sm:px-6 font-bold text-white text-sm md:text-base border-b-2 border-accent/40"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBanks.map((bank, index) => (
                    <motion.tr
                      key={bank.slug}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        ${index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'} 
                        hover:bg-accent/10 transition-all duration-200 border-b border-accent/20 group
                      `}
                    >
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 sticky left-0 z-10 group-hover:bg-accent/10" style={{backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent'}}>
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="font-semibold text-white text-sm md:text-base group-hover:text-accent transition-colors flex items-center gap-2">
                              {bank.name}
                              {bank.highlight && (
                                <SparklesIcon className="w-4 h-4 text-accent animate-pulse" />
                              )}
                            </div>
                            <div className="text-[10px] sm:text-xs text-muted">{bank.tagline}</div>
                            {bank.highlight && (
                              <div className="text-[10px] sm:text-xs text-accent font-medium mt-0.5">
                                {bank.highlight}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <svg width="0" height="0" style={{position: 'absolute'}}>
                            <defs>
                              <linearGradient id="starGoldGradientTable" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FFD700" /> {/* Gold */}
                                <stop offset="50%" stopColor="#FFA500" /> {/* Orange */}
                                <stop offset="100%" stopColor="#FFD700" /> {/* Gold */}
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="flex gap-0.5 star-container">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(bank.rating) ? "star-filled star-glow-animation" : "text-border"
                                }`}
                                fill={i < Math.floor(bank.rating) ? "url(#starGoldGradientTable)" : "currentColor"}
                                viewBox="0 0 20 20"
                                style={i < Math.floor(bank.rating) ? { animationDelay: `${i * 0.2}s` } : undefined}
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-accent font-semibold text-sm">{bank.rating}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          {getFeatureIcon(bank.features.cardFee, "card")}
                          <span className="text-sm text-foreground/90">{bank.features.cardFee}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          {getFeatureIcon(bank.features.minIncome, "income")}
                          <span className="text-sm text-foreground/90">{bank.features.minIncome}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          {getFeatureIcon(bank.features.withdraw, "withdraw")}
                          <span className="text-sm text-foreground/90">{bank.features.withdraw}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 border-r-2 border-accent/30 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          {getFeatureIcon(bank.features.support, "support")}
                          <span className="text-sm text-foreground/90">{bank.features.support}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Link href={`/banque/${bank.slug}`}>
                          <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                          >
                            <span>Voir</span>
                            <ArrowRightIcon className="w-4 h-4" />
                          </motion.button>
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedFade>
      )}
    </div>
  );
}

