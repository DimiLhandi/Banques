"use client";

import { useBankImage } from "@/lib/utils/imageUtils";
import { AnimatePresence, motion } from "framer-motion";

interface BankBackgroundImageProps {
  slug: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BankBackgroundImage({ slug, className = "", style = {} }: BankBackgroundImageProps) {
  const imagePath = useBankImage(slug);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={imagePath}
        className={className}
        style={{
          backgroundImage: `url('${imagePath}')`,
          ...style,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
}

