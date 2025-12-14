"use client";

import { useBankImage } from "@/lib/utils/imageUtils";
import { AnimatePresence, motion } from "framer-motion";

interface BankImageProps {
  slug: string;
  alt: string;
  className?: string;
}

export default function BankImage({ slug, alt, className = "" }: BankImageProps) {
  const imagePath = useBankImage(slug);

  // Gestion du fallback : si l'image -light.jpg n'existe pas, utiliser l'image normale
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (imagePath.includes("-light.jpg")) {
      // Si l'image jour n'existe pas, utiliser l'image nuit
      e.currentTarget.src = `/banks/${slug}.jpg`;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.img
        key={imagePath}
        src={imagePath}
        alt={alt}
        className={className}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}

