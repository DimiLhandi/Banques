# 🎨 HeroBanner - Guide d'utilisation

## 📦 Composant créé : `components/HeroBanner.tsx`

Bannière hero premium avec image de fond animée style Apple.

---

## 🚀 Utilisation de base

```tsx
import HeroBanner from "@/components/HeroBanner";

export default function Page() {
  return (
    <HeroBanner
      title="Votre titre ici"
      subtitle="Votre sous-titre ici"
    />
  );
}
```

---

## ⚙️ Props disponibles

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageSrc` | string | `/banner-bg.jpg` | Chemin de l'image |
| `title` | ReactNode | - | Titre principal |
| `subtitle` | ReactNode | - | Sous-titre |
| `children` | ReactNode | - | Contenu personnalisé |
| `height` | string | `60vh` | Hauteur de la bannière |

---

## 🎯 Exemples d'utilisation

### Exemple 1 : Simple

```tsx
<HeroBanner
  title="Bienvenue sur notre site"
  subtitle="La meilleure expérience premium"
/>
```

### Exemple 2 : Avec boutons

```tsx
<HeroBanner
  title="Découvrez nos services"
  subtitle="Innovation et excellence"
>
  <div className="flex gap-4">
    <button className="px-8 py-4 bg-accent text-black rounded-xl">
      Commencer
    </button>
    <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-xl">
      En savoir plus
    </button>
  </div>
</HeroBanner>
```

### Exemple 3 : Image personnalisée

```tsx
<HeroBanner
  imageSrc="/hero-custom.jpg"
  title="Mon titre custom"
  height="80vh"
/>
```

### Exemple 4 : Contenu JSX complexe

```tsx
<HeroBanner>
  <div className="max-w-4xl">
    <h1 className="text-6xl font-bold mb-4">
      Titre <span className="text-accent">personnalisé</span>
    </h1>
    <p className="text-xl mb-8">Description détaillée...</p>
    <div className="flex gap-4 justify-center">
      <button>Action 1</button>
      <button>Action 2</button>
    </div>
  </div>
</HeroBanner>
```

---

## 🎨 Animation CSS

L'animation est définie dans `app/globals.css` :

```css
@keyframes breath {
  0%, 100% {
    transform: scale(1.1) translate(0, 0);
  }
  50% {
    transform: scale(1.15) translate(2%, 1%);
  }
}

.animate-breath {
  animation: breath 25s ease-in-out infinite alternate;
  will-change: transform;
}
```

**Caractéristiques :**
- ⏱️ Durée : 25 secondes
- 🔄 Infinie + alternate (va-et-vient)
- 📏 Scale : 1.1 → 1.15
- 📍 Translate : léger déplacement (2%, 1%)
- 🌫️ Blur : 8px
- ⚡ Performance : `will-change: transform`

---

## 🎛️ Personnalisation avancée

### Modifier l'animation

Dans `globals.css`, ajustez les valeurs :

```css
/* Animation plus rapide */
animation: breath 15s ease-in-out infinite alternate;

/* Animation plus lente */
animation: breath 40s ease-in-out infinite alternate;

/* Plus de mouvement */
transform: scale(1.2) translate(4%, 2%);

/* Moins de blur */
filter: blur(4px);
```

### Modifier les couleurs overlay

Dans `HeroBanner.tsx`, ligne overlay :

```tsx
{/* Plus sombre */}
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

{/* Plus clair */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

{/* Accent coloré */}
<div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-black/40 to-black/70" />
```

---

## 📸 Ajouter votre image

1. Placez votre image dans `/public/banner-bg.jpg`
2. ✅ Le composant l'utilisera automatiquement !

**Ou** spécifiez un autre chemin :

```tsx
<HeroBanner imageSrc="/mon-image.jpg" />
```

---

## ✨ Résultat attendu

- 🖼️ Image de fond floue et animée
- 🎭 Effet "respiration" subtil (25s)
- 📱 Responsive parfait
- ⚡ Performance optimale (CSS pur)
- 🎨 Style Apple premium
- 📝 Texte parfaitement lisible

---

## 🔧 Compatibilité

- ✅ Next.js 14
- ✅ TailwindCSS 3.4
- ✅ React 18
- ✅ TypeScript
- ✅ Tous navigateurs modernes


