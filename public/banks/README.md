# 🏦 Images des Banques

## 📸 Placez vos images ici

Ce dossier contient les images de fond pour les pages de détail de chaque banque.

---

## 🌓 Système Jour/Nuit

Le site supporte maintenant **deux versions d'images** selon le thème :

### 🌙 Mode Nuit (Dark) - Images actuelles
- Format : `{slug}.jpg` (ex: `fortuneo.jpg`)
- Ces images sont utilisées en mode sombre (par défaut)
- **Les images actuelles sont déjà en version nuit**

### ☀️ Mode Jour (Light) - Nouvelles images
- Format : `{slug}-light.jpg` (ex: `fortuneo-light.jpg`)
- Ces images sont utilisées en mode clair
- **À ajouter pour chaque banque**

---

## 📋 Liste des images à ajouter :

### 🌙 Mode Nuit (déjà existantes ou à ajouter) :
- **fortuneo.jpg** ← Image de la carte noire Fortuneo sur fond orange/rouge
- monabanq.jpg
- trade-republic.jpg
- hello-bank.jpg
- bforbank.jpg
- boursobank.jpg
- wise.jpg
- revolut.jpg
- n26.jpg

### ☀️ Mode Jour (à ajouter) :
- **fortuneo-light.jpg** ← Version claire de l'image Fortuneo
- monabanq-light.jpg
- trade-republic-light.jpg
- hello-bank-light.jpg
- bforbank-light.jpg
- boursobank-light.jpg
- wise-light.jpg
- revolut-light.jpg
- n26-light.jpg

---

## 🎯 Instructions :

### Pour le Mode Nuit :
1. **Sauvegardez l'image** de la banque
2. **Renommez-la** en `{slug}.jpg` (ex: `fortuneo.jpg`)
3. **Placez-la** dans ce dossier (`public/banks/`)

### Pour le Mode Jour :
1. **Créez une version claire** de l'image (adaptée au fond clair)
2. **Renommez-la** en `{slug}-light.jpg` (ex: `fortuneo-light.jpg`)
3. **Placez-la** dans ce dossier (`public/banks/`)

### Test :
4. **Rafraîchissez** la page et **basculer entre les thèmes** pour voir les deux versions

---

## ✨ Résultat attendu :

Les images s'afficheront automatiquement selon le thème :
- **Mode Nuit** : Utilise `{slug}.jpg` (images actuelles)
- **Mode Jour** : Utilise `{slug}-light.jpg` (nouvelles images)
- Changement automatique lors du basculement de thème
- Effet blur (flou) en arrière-plan
- Overlay pour lisibilité
- Animation subtile

---

## 🔧 Format recommandé :

- **Format** : JPG ou PNG
- **Résolution** : 1920x1080 ou supérieur
- **Ratio** : 16:9 recommandé
- **Poids** : < 1 MB pour performance optimale

---

**Le système est prêt ! Ajoutez vos images jour et nuit ici. 🎉**

> 💡 **Note** : Si une image `-light.jpg` n'existe pas, le système utilisera automatiquement l'image de mode nuit par défaut.


