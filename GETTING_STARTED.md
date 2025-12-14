# 🚀 Guide de Démarrage Rapide

## Installation en 3 étapes

### 1️⃣ Installer les dépendances

```bash
npm install
```

### 2️⃣ Lancer le serveur de développement

```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur

Accédez à [http://localhost:3000](http://localhost:3000)

---

## 📋 Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Créer le build de production |
| `npm start` | Lancer le serveur de production |
| `npm run lint` | Vérifier le code avec ESLint |

---

## 🎨 Structure des pages

| URL | Description |
|-----|-------------|
| `/` | Page d'accueil avec les 9 banques |
| `/comparateur` | Tableau comparatif complet |
| `/banque/fortuneo` | Page détaillée de Fortuneo |
| `/banque/monabanq` | Page détaillée de Monabanq |
| `/banque/trade-republic` | Page détaillée de Trade Republic |
| `/banque/hello-bank` | Page détaillée de Hello Bank |
| `/banque/bforbank` | Page détaillée de BforBank |
| `/banque/boursobank` | Page détaillée de BoursoBank |
| `/banque/wise` | Page détaillée de Wise |
| `/banque/revolut` | Page détaillée de Revolut |
| `/banque/n26` | Page détaillée de N26 |

---

## 🎯 Modifier les données des banques

Toutes les données se trouvent dans `lib/data/banks.ts`.

Chaque banque contient :
- Nom, slug, tagline
- Description complète
- Avantages (pros) et inconvénients (cons)
- Caractéristiques (frais, conditions, support...)
- Note sur 5
- Badge de mise en avant

---

## 🎨 Personnaliser le design

### Couleurs (dans `tailwind.config.ts`)

```typescript
colors: {
  background: "#000000",  // Fond noir
  foreground: "#FFFFFF",  // Texte blanc
  accent: "#FF7A1A",      // Orange accent
  muted: "#999999",       // Texte secondaire
  card: "#111111",        // Fond des cartes
  border: "#222222",      // Bordures
}
```

### Typographie

La font principale est **Inter**, chargée automatiquement via Google Fonts.

---

## 📱 Responsive

Le site est entièrement responsive :
- **Mobile** : < 768px (1 colonne)
- **Tablet** : 768px - 1024px (2 colonnes)
- **Desktop** : > 1024px (3 colonnes)

---

## ✨ Animations

Le projet utilise **Framer Motion** pour les animations :
- Fade-in au scroll
- Hover effects sur les cartes
- Transitions fluides
- Indicateur de navigation animé

---

## 🚀 Déploiement sur Vercel

1. Push ton code sur GitHub
2. Connecte ton repo à Vercel
3. Déploiement automatique !

Ou via CLI :

```bash
npm i -g vercel
vercel --prod
```

---

## 🎁 Ce qui est inclus

✅ **3 pages principales**
- Page d'accueil (Hero + Grille)
- Comparateur (Tableau)
- 9 pages banques individuelles

✅ **8 composants réutilisables**
- Header avec navigation
- Footer
- BankCard
- BankGrid
- CompareTable
- Button
- Section
- AnimatedFade

✅ **Design System complet**
- Couleurs cohérentes
- Typographie premium
- Ombres et effets
- Animations smooth

✅ **SEO optimisé**
- Metadata dynamique
- Génération statique
- URLs propres

---

**Bon développement ! 🎉**


