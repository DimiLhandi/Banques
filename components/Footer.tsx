"use client";

import { useState } from "react";
import Link from "next/link";
import banks from "@/lib/data/banks";
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import BackToTopButton from "./BackToTopButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isNavigationOpen, setIsNavigationOpen] = useState(true);
  const [isBanquesOpen, setIsBanquesOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);

  return (
    <footer className="footer-section py-12 md:py-16 text-white border-t border-border/30">
      <div className="footer-content px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Grid principale */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-12 mb-12">
            {/* Colonne 1 - Brand */}
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 footer-title-gradient">
                Comparateur Banques
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                Trouvez la meilleure banque en ligne adaptée à vos besoins. 
                Comparaisons objectives, conseils experts, choix éclairés.
              </p>
              <div className="flex gap-4 justify-start">
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/CardsWorldBank" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white/5 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/cardsworldbank/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white/5 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                
                {/* Threads */}
                <a 
                  href="https://www.threads.com/@cardsworldbank" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white/5 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Threads"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.704-1.591 0-2.757-.536-3.374-1.548-.54-.885-.67-2.011-.386-3.351.29-1.379.935-2.545 1.856-3.369.984-.878 2.174-1.322 3.538-1.322 1.275 0 2.306.337 3.062.998.51.446.908 1.015 1.183 1.694.387-.21.799-.435 1.231-.67.722-.39 1.207-.59 1.474-.61l.112-.008c.608 0 1.31.337 1.975.753.744.465 1.44 1.05 2.071 1.743.631.692 1.194 1.49 1.673 2.365.479.875.862 1.82 1.138 2.807.276.987.415 2.01.415 3.039 0 1.447-.236 2.773-.703 3.94-.467 1.167-1.163 2.165-2.073 2.967-.91.802-2.03 1.42-3.334 1.835-1.305.416-2.787.623-4.409.623zm-2.096-8.08c-.446 0-.84.127-1.173.377-.347.262-.626.627-.83 1.086-.205.46-.31.976-.31 1.535 0 .844.19 1.485.565 1.908.375.423.927.633 1.642.633.716 0 1.356-.21 1.903-.627.548-.417.985-.996 1.302-1.722.317-.726.476-1.565.476-2.496v-.024c0-.844-.19-1.485-.565-1.908-.375-.423-.927-.633-1.642-.633z" />
                  </svg>
                </a>
                
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@cardsworldbank" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white/5 border border-border hover:border-accent hover:bg-accent/10 flex items-center justify-center transition-all duration-300 group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonne 2 - Navigation */}
            <div>
              {/* Version Desktop */}
              <h4 className="hidden md:block font-semibold text-lg mb-4 text-white">Navigation</h4>
              
              {/* Version Mobile - Accordéon */}
              <button
                onClick={() => setIsNavigationOpen(!isNavigationOpen)}
                className="md:hidden w-full flex items-center justify-between py-3 px-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <h4 className="font-semibold text-lg text-white">Navigation</h4>
                <motion.div
                  animate={{ rotate: isNavigationOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-accent" />
                </motion.div>
              </button>

              {/* Contenu Desktop */}
              <ul className="hidden md:block space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/comparateur" 
                    className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    Comparateur
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/#banques" 
                    className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    Nos Banques
                  </Link>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog
                  </a>
                </li>
              </ul>

              {/* Contenu Mobile - Accordéon */}
              <AnimatePresence initial={false}>
                {isNavigationOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden mt-2 space-y-2 px-4"
                  >
                    <li>
                      <Link 
                        href="/" 
                        className="text-muted hover:text-accent transition-colors duration-200 block py-2"
                      >
                        Accueil
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/comparateur" 
                        className="text-muted hover:text-accent transition-colors duration-200 block py-2"
                      >
                        Comparateur
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/#banques" 
                        className="text-muted hover:text-accent transition-colors duration-200 block py-2"
                      >
                        Nos Banques
                      </Link>
                    </li>
                    <li>
                      <a 
                        href="#" 
                        className="text-muted hover:text-accent transition-colors duration-200 block py-2"
                      >
                        Blog
                      </a>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Colonne 3 - Banques */}
            <div>
              {/* Version Desktop */}
              <h4 className="hidden md:block font-semibold text-lg mb-4 text-white">Banques</h4>
              
              {/* Version Mobile - Accordéon */}
              <button
                onClick={() => setIsBanquesOpen(!isBanquesOpen)}
                className="md:hidden w-full flex items-center justify-between py-3 px-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <h4 className="font-semibold text-lg text-white">Banques</h4>
                <motion.div
                  animate={{ rotate: isBanquesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-accent" />
                </motion.div>
              </button>

              {/* Contenu Desktop */}
              <ul className="hidden md:block space-y-3">
                {banks.map((bank) => (
                  <li key={bank.slug}>
                    <Link 
                      href={`/banque/${bank.slug}`}
                      className="text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {bank.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contenu Mobile - Accordéon */}
              <AnimatePresence initial={false}>
                {isBanquesOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden mt-2 space-y-2 px-4"
                  >
                    {banks.map((bank) => (
                      <li key={bank.slug}>
                        <Link 
                          href={`/banque/${bank.slug}`}
                          className="text-muted hover:text-accent transition-colors duration-200 block py-2"
                        >
                          {bank.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Colonne 4 - Contact */}
            <div>
              {/* Version Desktop */}
              <h4 className="hidden md:block font-semibold text-lg mb-4 text-white">Contact</h4>
              
              {/* Version Mobile - Accordéon */}
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="md:hidden w-full flex items-center justify-between py-3 px-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <h4 className="font-semibold text-lg text-white">Contact</h4>
                <motion.div
                  animate={{ rotate: isContactOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-5 h-5 text-accent" />
                </motion.div>
              </button>

              {/* Contenu Desktop */}
              <ul className="hidden md:block space-y-4">
                <li className="flex items-start gap-3 text-muted text-sm sm:text-base">
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a href="mailto:contact@comparateur-banques.fr" className="hover:text-accent transition-colors">
                    contact@comparateur-banques.fr
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted text-sm sm:text-base">
                  <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a href="tel:+33123456789" className="hover:text-accent transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted text-sm sm:text-base">
                  <MapPinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Paris, France</span>
                </li>
              </ul>

              {/* Contenu Mobile - Accordéon */}
              <AnimatePresence initial={false}>
                {isContactOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="md:hidden overflow-hidden mt-2 space-y-3 px-4"
                  >
                    <li className="flex items-start gap-3 text-muted text-sm">
                      <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <a href="mailto:contact@comparateur-banques.fr" className="hover:text-accent transition-colors">
                        contact@comparateur-banques.fr
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-muted text-sm">
                      <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <a href="tel:+33123456789" className="hover:text-accent transition-colors">
                        +33 1 23 45 67 89
                      </a>
                    </li>
                    <li className="flex items-start gap-3 text-muted text-sm">
                      <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Paris, France</span>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 pt-6 sm:pt-7 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-4">
              {/* Copyright */}
              <p className="text-muted text-sm text-center md:text-left">
                © {currentYear} Comparateur Banques. Tous droits réservés.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted">
                <Link href="/mentions-legales" className="hover:text-accent transition-colors">
                  Mentions légales
                </Link>
                <Link href="/confidentialite" className="hover:text-accent transition-colors">
                  Confidentialité
                </Link>
                <Link href="/cgu" className="hover:text-accent transition-colors">
                  CGU
                </Link>
                <Link href="/cookies" className="hover:text-accent transition-colors">
                  Cookies
                </Link>
              </div>

              {/* Back to top - Client side button */}
              <BackToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
