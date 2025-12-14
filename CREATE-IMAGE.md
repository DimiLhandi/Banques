# 🎨 Comment créer/obtenir votre image de bannière

## 🚀 Option 1 : Télécharger une image gratuite (Recommandé)

### **Unsplash** (Haute qualité)
1. Allez sur : https://unsplash.com
2. Recherchez : "gradient mesh", "abstract blur", "dark gradient"
3. Téléchargez l'image
4. Renommez-la en `banner-bg.jpg`
5. Placez-la dans `/public/banner-bg.jpg`

### **Recherches recommandées**
- "gradient mesh abstract"
- "dark blue gradient"
- "purple orange gradient"
- "abstract blur background"
- "mesh gradient wallpaper"

---

## 🎨 Option 2 : Générer un gradient mesh en ligne

### **MeshGradient.com**
1. Allez sur : https://meshgradient.com
2. Créez votre gradient personnalisé
3. Exportez en JPG
4. Sauvegardez comme `banner-bg.jpg`
5. Placez dans `/public/`

### **Coolors**
1. Allez sur : https://coolors.co/gradient-maker
2. Choisissez vos couleurs (noir, orange, violet...)
3. Téléchargez
4. Placez dans `/public/banner-bg.jpg`

---

## 🖼️ Option 3 : Utiliser une image existante

Si vous avez déjà une image :

```bash
# 1. Copiez votre image dans le dossier public
cp votre-image.jpg public/banner-bg.jpg

# 2. Ou renommez-la directement
mv votre-image.jpg public/banner-bg.jpg
```

---

## 📐 Spécifications recommandées

| Propriété | Valeur recommandée |
|-----------|-------------------|
| **Dimensions** | 1920x1080px minimum |
| **Format** | JPG (meilleure compression) |
| **Poids** | < 500KB (optimisé) |
| **Style** | Abstrait, gradient, flou |
| **Couleurs** | Sombres (noir, bleu foncé, violet) |
| **Contraste** | Bas/moyen (sera flouté) |

---

## 🎯 Exemples d'images parfaites

✅ **BON** :
- Gradient mesh abstrait noir/violet/orange
- Bokeh flou coloré
- Abstraction géométrique douce
- Paysage urbain de nuit flouté

❌ **ÉVITER** :
- Images avec texte
- Trop de détails (seront perdus avec le blur)
- Couleurs trop vives (gênent la lecture)
- Visages ou personnes

---

## 🔧 Optimiser votre image

### En ligne (gratuit)
- **TinyPNG** : https://tinypng.com
- **Squoosh** : https://squoosh.app

### Dimensions idéales
```bash
# Avec ImageMagick (si installé)
magick convert votre-image.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 banner-bg.jpg

# Avec GIMP / Photoshop
- Taille : 1920x1080px
- Qualité : 85%
- Format : JPG
```

---

## 💡 Placeholder temporaire

En attendant votre vraie image, vous pouvez utiliser :

### Gradient CSS simple
Créez `public/placeholder.jpg` ou modifiez le composant pour utiliser un gradient CSS en attendant :

```tsx
<HeroBanner
  imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23FF6B35;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23a)'/%3E%3C/svg%3E"
  title="Votre titre"
/>
```

---

## ✅ Checklist finale

- [ ] Image téléchargée ou créée
- [ ] Dimensions : 1920x1080px
- [ ] Poids : < 500KB
- [ ] Fichier nommé : `banner-bg.jpg`
- [ ] Placé dans : `/public/banner-bg.jpg`
- [ ] Serveur redémarré (Ctrl+C puis `npm run dev`)
- [ ] Page rafraîchie dans le navigateur

---

**Une fois l'image en place, votre bannière s'animera automatiquement ! 🎉**


