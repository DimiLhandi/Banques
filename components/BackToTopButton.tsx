"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function BackToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="group flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
      aria-label="Retour en haut"
    >
      <span className="hidden sm:inline">Retour en haut</span>
      <div className="w-8 h-8 rounded-full bg-white/5 border border-border group-hover:border-accent group-hover:bg-accent/10 flex items-center justify-center transition-all duration-300">
        <ArrowUpIcon className="w-4 h-4" />
      </div>
    </button>
  );
}


