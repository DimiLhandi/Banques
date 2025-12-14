"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import AnimatedFade from "./AnimatedFade";

const faqs = [
  {
    question: "Comment choisir la meilleure banque en ligne ?",
    answer:
      "Le choix dépend de vos besoins : frais de carte, conditions de revenus, qualité du support, services internationaux. Utilisez notre comparateur avec filtres pour trouver la banque qui vous correspond. Si vous voyagez beaucoup, privilégiez Wise ou Revolut. Si vous voulez investir, Trade Republic est idéale.",
  },
  {
    question: "Les banques en ligne sont-elles sûres ?",
    answer:
      "Oui, absolument. Toutes les banques présentées sont régulées et garantissent vos dépôts jusqu'à 100 000€ par le Fonds de Garantie des Dépôts (FGD) en France ou équivalent européen. Elles utilisent les mêmes normes de sécurité que les banques traditionnelles : chiffrement, authentification forte, surveillance 24/7.",
  },
  {
    question: "Puis-je avoir plusieurs banques en ligne ?",
    answer:
      "Tout à fait ! Beaucoup d'utilisateurs combinent plusieurs banques : une banque principale (Fortuneo, BoursoBank) pour le quotidien, et une néobanque (Revolut, N26) pour voyager. Cette stratégie permet de profiter des avantages de chacune sans compromis.",
  },
  {
    question: "Comment ouvrir un compte en ligne ?",
    answer:
      "L'ouverture est 100% digitale et prend 5 à 15 minutes. Vous aurez besoin d'une pièce d'identité valide, d'un justificatif de domicile récent, et parfois d'un justificatif de revenus. L'identification se fait par vidéo ou selfie. Votre carte arrive sous 5 à 10 jours.",
  },
  {
    question: "Y a-t-il des frais cachés ?",
    answer:
      "Les banques en ligne sont réputées pour leur transparence. La plupart n'ont pas de frais de tenue de compte ni de carte (sous conditions). Attention aux frais spécifiques : retraits hors zone euro, découvert, virements internationaux. Notre comparateur détaille tous les frais pour chaque banque.",
  },
  {
    question: "Puis-je déposer des espèces ?",
    answer:
      "C'est la principale limitation des banques en ligne. La plupart n'acceptent pas les dépôts d'espèces. Exceptions : Hello Bank! (via agences BNP Paribas) et BoursoBank (via partenariats). Si vous manipulez beaucoup d'espèces, gardez un compte traditionnel en complément.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="faq-content px-4 sm:px-6 md:px-12 lg:px-24">
        <AnimatedFade>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <QuestionMarkCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent faq-icon-glow" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Questions fréquentes</h2>
            </div>
            <p className="text-muted text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              Tout ce que vous devez savoir avant de choisir votre banque en ligne
            </p>
          </div>
        </AnimatedFade>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedFade key={index} delay={index * 0.05}>
              <motion.div
                className="bg-accent/10 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-accent/30 hover:border-accent hover:bg-accent/20 transition-all duration-300"
                whileHover={{ scale: 1.01, boxShadow: "0 0 30px rgba(255, 122, 26, 0.3)" }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-semibold text-sm sm:text-base md:text-lg pr-4 sm:pr-6 md:pr-8 text-white group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-white transition-colors flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-white/80 leading-relaxed border-t border-accent/30 pt-4 sm:pt-5 md:pt-6 text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatedFade>
          ))}
        </div>
      </div>
    </section>
  );
}
