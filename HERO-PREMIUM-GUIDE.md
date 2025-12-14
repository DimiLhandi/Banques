# 🎨 Hero Banner Premium - Style Parrainbank

## ✅ Ce qui a été créé

### 📦 Composant : `components/HeroBannerPremium.tsx`

Reproduction exacte du style de la photo avec vos couleurs (noir/blanc/orange).

---

## 🎯 Structure identique à la photo

### 1️⃣ **Badge Premium** (en haut)
```tsx
<div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
  <SparklesIcon className="w-5 h-5 text-accent" />
  <span className="text-white font-medium">
    Plateforme Premium d'Optimisation Bancaire
  </span>
</div>
```

### 2️⃣ **Titre principal** (grand texte)
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
  Les meilleures
  <br />
  offres bancaires
</h1>
```

### 3️⃣ **Sous-titre** (description)
```tsx
<p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
  Un contenu clair, vérifié et présenté par des experts indépendants.
</p>
```

### 4️⃣ **2 Boutons** (actions)
```tsx
<button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
  <EyeIcon className="w-5 h-5" />
  <span>Découvrir l'Offre Exclusive du Jour</span>
</button>

<button className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white">
  <MagnifyingGlassIcon className="w-5 h-5" />
  <span>Comparer Toutes les Banques</span>
</button>
```

---

## 🎨 Style appliqué (vos couleurs)

### Fond
- **Gradient noir** : `#000000 → #1a1a1a → #000000`
- **Blur** : 60px (très doux)
- **Animation** : breath 25s (respiration lente)

### Texte
- **Titre** : Blanc pur (#FFFFFF)
- **Sous-titre** : Blanc 80% d'opacité
- **Badge** : Blanc avec icône orange

### Boutons
- **Background** : `bg-white/10` (verre semi-transparent)
- **Border** : `border-white/20`
- **Backdrop blur** : Effet verre dépoli
- **Hover** : Opacité augmentée

### Accent orange
- Icône du badge : `text-accent` (#FF6B35)
- Effet de lumière : `bg-accent/5` (très subtil)

---

## 🚀 Comment voir le résultat

### **Le site est déjà mis à jour !**

1. Rafraîchissez votre navigateur sur **http://localhost:3000**
2. Vous verrez le nouveau hero banner

---

## ✏️ Personnalisation

### Changer le texte du badge

```tsx
<span className="text-white font-medium">
  Votre texte personnalisé ici
</span>
```

### Changer le titre

```tsx
<h1 className="...">
  Votre titre
  <br />
  sur deux lignes
</h1>
```

### Changer le sous-titre

```tsx
<p className="...">
  Votre description personnalisée ici.
</p>
```

### Changer les liens des boutons

Dans `HeroBannerPremium.tsx` :

```tsx
<Link href="/offre-du-jour">        {/* ← Changez ici */}
<Link href="/comparateur">          {/* ← Changez ici */}
```

### Changer le texte des boutons

```tsx
<span>Votre texte bouton 1</span>
<span>Votre texte bouton 2</span>
```

---

## 🎛️ Ajustements avancés

### Hauteur de la bannière

```tsx
<section className="relative min-h-[85vh] ...">  {/* 85vh = 85% de la hauteur écran */}
                           {/* Changez en 70vh, 100vh, etc. */}
```

### Taille du titre

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl ...">
              {/* 👆 mobile  👆 tablet  👆 desktop */}
```

### Opacité du fond

```tsx
<div className="bg-white/10 ...">  {/* /10 = 10% opaque */}
              {/* Changez en /5, /15, /20 */}
```

### Blur du fond

```tsx
style={{ filter: "blur(60px)" }}  {/* Changez 60px en 40px, 80px... */}
```

### Vitesse d'animation

Dans `globals.css` :

```css
.animate-breath {
  animation: breath 25s ease-in-out infinite alternate;
                   /* 👆 Changez en 15s, 40s... */}
```

---

## 📊 Comparaison avec la photo

| Élément | Photo originale | Votre version |
|---------|----------------|---------------|
| **Fond** | Bleu/cyan gradient | Noir gradient |
| **Texte** | Blanc | ✅ Blanc |
| **Badge** | Icône + texte | ✅ Icône + texte |
| **Boutons** | 2 boutons glass | ✅ 2 boutons glass |
| **Structure** | Centré vertical | ✅ Centré vertical |
| **Animation** | Douce | ✅ Douce (25s) |
| **Responsive** | Oui | ✅ Oui |

---

## 🎯 Effet final

✅ **Structure identique** à la photo  
✅ **Couleurs** : Noir/Blanc/Orange (les vôtres)  
✅ **Animation** : Respiration lente (25s)  
✅ **Glass morphism** : Boutons effet verre  
✅ **Responsive** : Mobile → Desktop  
✅ **Premium** : Style épuré et élégant  

---

## 🔥 Bonus : Variantes rapides

### Version avec plus d'accent orange

```tsx
{/* Badge orange */}
<div className="bg-accent/20 border-accent/40 ...">
  <span className="text-accent">Texte orange</span>
</div>

{/* Bouton orange */}
<button className="bg-accent text-black ...">
  Bouton Action
</button>
```

### Version avec image de fond

Remplacez le gradient par :

```tsx
style={{
  backgroundImage: "url('/banner-bg.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "blur(60px)",
}}
```

---

**Le hero banner est maintenant identique à la photo avec vos couleurs ! 🎉**

Rafraîchissez **http://localhost:3000** pour voir le résultat !


