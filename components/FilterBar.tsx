"use client";

import { motion } from "framer-motion";
import { 
  FunnelIcon, 
  XMarkIcon,
  CreditCardIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from "@heroicons/react/24/outline";

export interface FilterOptions {
  cardFree: boolean;
  noMinIncome: boolean;
  international: boolean;
  premiumSupport: boolean;
  highRating: boolean;
}

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  activeCount: number;
}

export default function FilterBar({ filters, onFilterChange, activeCount }: FilterBarProps) {
  const filterItems = [
    { key: "cardFree" as keyof FilterOptions, label: "Carte gratuite", icon: CreditCardIcon },
    { key: "noMinIncome" as keyof FilterOptions, label: "Sans condition", icon: CheckCircleIcon },
    { key: "international" as keyof FilterOptions, label: "International", icon: GlobeAltIcon },
    { key: "premiumSupport" as keyof FilterOptions, label: "Support premium", icon: ChatBubbleLeftRightIcon },
    { key: "highRating" as keyof FilterOptions, label: "Note 4.5+", icon: StarIcon },
  ];

  const toggleFilter = (key: keyof FilterOptions) => {
    onFilterChange({
      ...filters,
      [key]: !filters[key],
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      cardFree: false,
      noMinIncome: false,
      international: false,
      premiumSupport: false,
      highRating: false,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
            <FunnelIcon className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Filtres intelligents</h3>
          {activeCount > 0 && (
            <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
              {activeCount}
            </span>
          )}
        </div>
        {activeCount > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearAllFilters}
            className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <XMarkIcon className="w-4 h-4" />
            <span>Réinitialiser</span>
          </motion.button>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
        {filterItems.map((item) => {
          const isActive = filters[item.key];
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.key}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleFilter(item.key)}
              className={`
                flex items-center gap-2.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 w-full md:w-auto
                ${
                  isActive
                    ? "bg-accent text-white shadow-[0_4px_20px_rgba(255,122,26,0.4)] border-2 border-accent"
                    : "bg-white/10 text-white border-2 border-white/20 hover:bg-white/15 hover:border-accent/50 hover:shadow-[0_2px_12px_rgba(255,122,26,0.2)] backdrop-blur-xl"
                }
              `}
            >
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md
                ${
                  isActive
                    ? "bg-white/20"
                    : "bg-gradient-to-br from-accent/30 to-accent/10"
                }
              `}>
                <IconComponent className={`w-5 h-5 ${isActive ? "text-white" : "text-accent"}`} />
              </div>
              <span>{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

