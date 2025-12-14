# 🏦 Comparateur Banques en Ligne — Design Apple Premium

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Site web ultra-premium de comparaison de banques en ligne**

*Design minimaliste façon Apple • Animations fluides • Filtres intelligents*

[🚀 Demo](#) • [📖 Documentation](#getting-started) • [🎨 Design System](#design-system)

</div>

---

## ✨ Fonctionnalités Premium

### 🎯 Comparateur Intelligent
- **Filtres interactifs** : Carte gratuite, sans condition, international, support premium, note 4.5+
- **Tri automatique** par note décroissante
- **Icônes visuelles** : Points forts (✓ vert), neutres (⊖ jaune)
- **Interface dynamique** : Compteur de filtres actifs, reset rapide

### 🏦 9 Banques Analysées
- **Banques françaises** : Fortuneo, Monabanq, Hello Bank, BforBank, BoursoBank
- **Néobanques** : Trade Republic, Wise, Revolut, N26
- **Données complètes** : Frais, conditions, support, notes, avantages/inconvénients

### 🎨 Design System Apple
- **Palette** : Noir pur (#000000) • Blanc (#FFFFFF) • Orange (#FF6B35)
- **Typographie** : Inter (Google Fonts)
- **Effets** : Glass morphism, glow effects, subtle gradients
- **Micro-interactions** : Hover, scale, rotate, slide animations

### 📱 Responsive & Accessible
- **Mobile-first** : Parfaitement adapté à tous les écrans
- **Performance** : Optimisé avec Server Components
- **SEO** : Metadata dynamique pour chaque page
- **Animations** : Framer Motion avec transitions fluides

---

## 🚀 Getting Started

### Installation Rapide

```bash
# 1. Cloner le repo (ou télécharger)
git clone [your-repo-url]
cd PROJECT-505

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur 🎉

### Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production optimisé |
| `npm start` | Lance le serveur de production |
| `npm run lint` | Vérifie le code avec ESLint |

---

## 📁 Structure du Projet

```
PROJECT 505/
├── app/
│   ├── banque/[slug]/
│   │   └── page.tsx          # Pages dynamiques (9 banques)
│   ├── comparateur/
│   │   └── page.tsx          # Comparateur avec filtres
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Page d'accueil
│
├── components/
│   ├── AnimatedFade.tsx      # Animation fade-in au scroll
│   ├── BankCard.tsx          # Carte de banque avec hover
│   ├── BankGrid.tsx          # Grille responsive
│   ├── Button.tsx            # Bouton réutilisable
│   ├── CompareTableAdvanced.tsx  # Tableau avec filtres
│   ├── CTASection.tsx        # Section Call-to-Action
│   ├── FAQ.tsx               # Section FAQ accordéon
│   ├── FilterBar.tsx         # Barre de filtres intelligents
│   ├── Footer.tsx            # Footer animé
│   ├── Header.tsx            # Header avec navigation
│   ├── Section.tsx           # Wrapper de section
│   └── StatsSection.tsx      # Section statistiques
│
├── lib/
│   └── data/
│       └── banks.ts          # Données complètes des 9 banques
│
├── tailwind.config.ts        # Configuration Tailwind + Design System
├── tsconfig.json             # Configuration TypeScript
├── next.config.js            # Configuration Next.js
└── package.json              # Dépendances
```

---

## 🎨 Design System

### Palette de Couleurs

```typescript
colors: {
  background: "#000000",      // Noir pur
  foreground: "#FFFFFF",      // Blanc pur
  accent: "#FF6B35",          // Orange principal
  accentHover: "#FF8556",     // Orange hover
  muted: "#999999",           // Gris texte secondaire
  mutedDark: "#666666",       // Gris foncé
  card: "#0A0A0A",            // Fond carte
  cardHover: "#111111",       // Fond carte hover
  border: "#1A1A1A",          // Bordures
  borderLight: "#2A2A2A",     // Bordures claires
}
```

### Ombres & Effets

```typescript
boxShadow: {
  glow: "0 0 20px rgba(255, 107, 53, 0.15)",
  "glow-lg": "0 0 40px rgba(255, 107, 53, 0.25)",
  card: "0 4px 24px rgba(0, 0, 0, 0.4)",
  "card-hover": "0 8px 32px rgba(255, 107, 53, 0.2)",
}
```

### Animations

- **fade-in** : Apparition douce avec translateY
- **fade-in-up** : Slide vers le haut
- **scale-in** : Zoom progressif
- **pulse-glow** : Pulsation lumineuse
- **shimmer** : Effet brillant animé

---

## 🏦 Données des Banques

Chaque banque contient :

```typescript
interface Bank {
  name: string;              // Nom de la banque
  slug: string;              // URL slug
  tagline: string;           // Slogan
  description: string;       // Description longue
  pros: string[];            // 5 avantages
  cons: string[];            // 3 inconvénients
  features: {
    cardFee: string;         // Frais de carte
    minIncome: string;       // Revenus minimum
    withdraw: string;        // Conditions retraits
    support: string;         // Support client
    app: string;             // Note application
  };
  rating: number;            // Note sur 5
  highlight: string;         // Badge de mise en avant
}
```

---

## 🎯 Pages & Fonctionnalités

### 🏠 Page d'Accueil (`/`)
- **Hero section** avec titre animé et CTA
- **Stats section** : 4 statistiques clés + 3 cards info
- **Bank grid** : 9 cartes de banques avec hover effects
- **FAQ section** : 6 questions avec accordéon animé
- **CTA section** : Call-to-action avec background animé

### 📊 Comparateur (`/comparateur`)
- **Filtres intelligents** : 5 filtres avec compteur actif
- **Tableau dynamique** : Tri par note, icônes visuelles
- **Responsive** : Scroll horizontal sur mobile
- **Info tooltip** : Guide d'utilisation

### 🏦 Pages Banques (`/banque/[slug]`)
- **Header** : Logo, badge, note, description
- **Features grid** : 5+ caractéristiques en cards
- **Pros & Cons** : 2 colonnes avec icônes
- **CTA section** : Boutons vers comparateur
- **Autres banques** : 4 suggestions

---

## 🔥 Micro-Interactions Premium

### Animations au Hover
- **Cards** : translateY(-8px) + scale(1.02)
- **Buttons** : scale(1.05) + shadow glow
- **Icons** : rotate(360deg) sur étoiles
- **Links** : translateX sur arrows

### Effets Visuels
- **Glass morphism** : backdrop-blur + opacity
- **Glow effects** : box-shadow avec accent color
- **Gradient animations** : Rotation infinie
- **Shimmer effect** : Background position animé

---

## 📱 Responsive Breakpoints

```css
Mobile:   < 768px   (1 colonne)
Tablet:   768-1024px (2 colonnes)
Desktop:  > 1024px   (3 colonnes)
```

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Via CLI
npm i -g vercel
vercel --prod

# Ou connectez votre repo GitHub à Vercel
# Déploiement automatique à chaque push !
```

### Build Local

```bash
npm run build
npm start
```

---

## 🛠️ Technologies

| Tech | Version | Usage |
|------|---------|-------|
| **Next.js** | 14.2 | Framework React avec App Router |
| **React** | 18.3 | Library UI avec Server Components |
| **TypeScript** | 5.4 | Typage statique |
| **TailwindCSS** | 3.4 | Utility-first CSS |
| **Framer Motion** | 11.2 | Animations fluides |
| **Heroicons** | 2.1 | Icônes minimalistes |

---

## ✅ Checklist Qualité

- ✅ **Design** : Style Apple minimaliste, palette cohérente
- ✅ **Animations** : Framer Motion, transitions fluides
- ✅ **Responsive** : Mobile, tablet, desktop
- ✅ **Performance** : Server Components, optimisations
- ✅ **SEO** : Metadata dynamique, balises sémantiques
- ✅ **Accessibilité** : Contraste, hover states, focus
- ✅ **Code** : TypeScript strict, 0 erreur linting
- ✅ **DX** : Composants réutilisables, code propre

---

## 💡 Améliorations Futures

- [ ] Mode clair/sombre toggle
- [ ] Recherche en temps réel
- [ ] Comparaison côte-à-côte (max 3)
- [ ] Export PDF des comparaisons
- [ ] Authentification utilisateur
- [ ] Sauvegarde favoris
- [ ] Blog/Articles
- [ ] Notifications push
- [ ] API REST
- [ ] Tests E2E (Playwright)

---

## 📄 Licence

MIT License — Libre d'utilisation

---

## 🙏 Crédits

- **Design inspiration** : Apple.com
- **Icônes** : Heroicons
- **Fonts** : Inter (Google Fonts)
- **Stack** : Next.js + React + TailwindCSS

---

<div align="center">

**Fait avec ❤️ et Next.js**

[⬆ Retour en haut](#-comparateur-banques-en-ligne--design-apple-premium)

</div>
