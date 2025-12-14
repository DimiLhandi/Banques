"use client";

import Link from "next/link";
import { SparklesIcon, EyeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HeroBannerPremium({ imageSrc = "/banner-bg.jpg" }: { imageSrc?: string }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden rounded-3xl">
      {/* Animated Gradient Background - Style Apple */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0 banner-animated-bg"
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(255, 107, 53, 0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, rgba(255, 60, 40, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(255, 150, 80, 0.3) 0%, transparent 60%),
              linear-gradient(135deg, #1a0a00 0%, #330d00 20%, #661a00 40%, #991500 60%, #661a00 80%, #1a0a00 100%)
            `,
            filter: "blur(60px)",
          }}
        />
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge Premium - Animation scale-in */}
        <div 
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full animate-scale-in animate-float"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <SparklesIcon className="w-5 h-5 text-accent animate-glow-pulse" />
          <span className="text-white font-medium">
            Plateforme Premium d'Optimisation Bancaire
          </span>
        </div>

        {/* Titre Principal - Animation fade-in-up avec shimmer */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up"
          style={{ 
            animationDelay: "0.4s",
            opacity: 0,
            animationFillMode: "forwards",
            background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Les meilleures
          <br />
          offres bancaires
        </h1>

        {/* Sous-titre - Animation fade-in-up */}
        <p 
          className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
        >
          Un contenu clair, vérifié et présenté par des experts indépendants.
        </p>

        {/* Boutons d'action - Animation fade-in-up avec hover premium */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Link href="/offre-du-jour">
            <button className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <EyeIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Découvrir l'Offre Exclusive du Jour</span>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link href="/comparateur">
            <button className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-medium hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <MagnifyingGlassIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Comparer Toutes les Banques</span>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
