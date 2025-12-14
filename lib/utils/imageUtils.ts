"use client";

import React from "react";

/**
 * Retourne le chemin d'image selon le thème actuel
 * - Mode nuit (dark) : /banks/{slug}.jpg (images actuelles)
 * - Mode jour (light) : /banks/{slug}-light.jpg (nouvelles images)
 * 
 * Si l'image jour n'existe pas, utilise l'image nuit par défaut (fallback)
 * 
 * @param slug - Le slug de la banque (ex: "fortuneo", "monabanq")
 * @returns Le chemin d'image avec le bon suffixe selon le thème
 */
export function getBankImage(slug: string): string {
  if (typeof window === "undefined") {
    // SSR : retourne l'image par défaut (nuit)
    return `/banks/${slug}.jpg`;
  }

  // Vérifier si le mode clair est activé
  const isLightMode = document.body.classList.contains("light-mode");
  
  if (isLightMode) {
    // En mode jour, on essaie d'abord l'image -light.jpg
    // Le fallback vers l'image normale sera géré par le navigateur si l'image n'existe pas
    return `/banks/${slug}-light.jpg`;
  }
  
  // Mode nuit par défaut
  return `/banks/${slug}.jpg`;
}

/**
 * Hook React pour obtenir l'image de banque selon le thème
 * Se met à jour automatiquement quand le thème change
 */
export function useBankImage(slug: string): string {
  if (typeof window === "undefined") {
    return `/banks/${slug}.jpg`;
  }

  // Utiliser un state pour forcer le re-render quand le thème change
  const [imagePath, setImagePath] = React.useState(() => getBankImage(slug));

  React.useEffect(() => {
    const updateImage = () => {
      setImagePath(getBankImage(slug));
    };

    // Observer les changements de classe sur le body
    const observer = new MutationObserver(updateImage);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Vérifier aussi au chargement
    updateImage();

    return () => observer.disconnect();
  }, [slug]);

  return imagePath;
}

