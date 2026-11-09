# 🚀 ATS Career Copilot — AI-Powered Job Matching & Skill Gap Booster

[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green.svg)]()
[![AI Engine](https://img.shields.io/badge/AI%20Engine-Gemini%20%2F%20Claude-blue.svg)]()
[![ATS Score](https://img.shields.io/badge/ATS%20Optimized-100%25-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-purple.svg)]()
[![Author](https://img.shields.io/badge/Author-Darryl%20Fotso-orange.svg)](https://github.com/Fotso12)

> **Agent IA autonome pour l'adaptation chirurgicale de CV aux exigences ATS (Applicant Tracking Systems), détection d'écarts techniques et génération de blueprints de projets GitHub.**

---

## 🎯 Problématique résolue

Les systèmes de filtrage automatique (**ATS** tels que Workday, Taleo, Greenhouse) rejettent plus de 75% des candidatures tech parce que :
1. Les mots-clés exacts de l'offre ne figurent pas dans le CV.
2. Le format du CV contient des tableaux, barres ou doubles colonnes illisibles par les parsers.
3. Il manque une technologie clé exigée par l'entreprise sans preuve concrète sur GitHub.

**ATS Career Copilot** résout ces trois problèmes grâce à une architecture en 3 étapes :
* **Diagnostic & Gap Analysis :** Comparaison instantanée entre le profil candidat et l'offre d'emploi.
* **Skill Gap Booster :** Conception d'un mini-projet GitHub concret (2-3 jours) prouvant la maîtrise de la technologie manquante.
* **CV sur mesure 100% ATS-Ready :** Génération d'un CV optimisé à 1 colonne, avec métriques chiffrées et intégration naturelle des mots-clés.

---

## 🏗️ Architecture du Projet

```text
ats-career-copilot/
├── data/
│   └── PROFILE_MASTER.md          # Base de connaissances exhaustive du candidat
├── templates/
│   ├── resume_template.typ        # Template Typst pour export PDF vectoriel parfait ATS
│   └── cv_markdown_template.md    # Modèle Markdown 1 colonne
├── src/
│   ├── prompts.js                 # Définition des méta-prompts ATS & Gap Booster
│   ├── ats_analyzer.js            # Analyseur heuristique local de mots-clés (Offline)
│   └── copilot.js                 # Moteur IA (Google Gemini API / Claude / Offline)
├── examples/
│   └── offre_stage_java_spring.txt # Exemple d'offre d'emploi réelle pour test
├── outputs/                       # Dossier de sortie des diagnostics, CVs et blueprints
├── copilot.ps1                    # Lanceur rapide Windows PowerShell
├── index.js                       # Point d'entrée CLI
└── package.json
```

---

## ⚡ Guide de Démarrage Rapide

### 1. Prérequis
* **Node.js** (version 18 ou supérieure). Aucun paquet payant n'est requis.

### 2. Lancer l'analyse sur une offre d'emploi

Placez le texte de l'offre dans un fichier texte (ex: `ma_nouvelle_offre.txt`), puis lancez :

```bash
# Avec npm
npm start ma_nouvelle_offre.txt

# Ou directement avec Node.js
node index.js ma_nouvelle_offre.txt

# Ou sous Windows PowerShell
.\copilot.ps1 ma_nouvelle_offre.txt
```

---

## 🤖 Modes d'Exécution de l'IA (100% Gratuit)

### Option A : Mode Sans Clé API (100% Gratuit & Hors-Ligne)
Si aucune variable d'environnement n'est définie :
1. L'outil analyse instantanément les mots-clés en local.
2. Il compile et génère un fichier prêt à l'emploi : `outputs/prompt_pour_claude_YYYY-MM-DD.md`.
3. Il vous suffit de copier-coller ce contenu dans [Claude.ai](https://claude.ai) (gratuit) ou ChatGPT pour recevoir en 30 secondes votre diagnostic, votre projet GitHub et votre CV adapté.

### Option B : Mode Tout-en-Un Automatique avec Google Gemini API (100% Gratuit)
Vous pouvez automatiser l'appel direct à l'IA avec une clé gratuite **Google AI Studio** :
1. Obtenez une clé gratuite sur [Google AI Studio](https://aistudio.google.com/).
2. Définissez la variable d'environnement :
   ```bash
   # Windows PowerShell
   $env:GEMINI_API_KEY = "votre_cle_gemini"

   # Linux / macOS
   export GEMINI_API_KEY="votre_cle_gemini"
   ```
3. Relancez `node index.js ma_nouvelle_offre.txt` : le CV adapté et le blueprint de projet sont rédigés et sauvegardés automatiquement dans `outputs/` !

---

## 📄 Export PDF Garanti 100% ATS-Friendly

Pour convertir le CV généré en PDF sans risque de rejet par les ATS :
1. Rendez-vous sur [Typst App](https://typst.app/) (gratuit dans le navigateur).
2. Ouvrez le fichier `templates/resume_template.typ`.
3. Ajustez les puces avec celles générées par l'agent IA et téléchargez votre PDF vectoriel.

---

## 👨‍💻 Auteur & Licence

Développé par **[Darryl Fotso](https://github.com/Fotso12)**  
Email : tamofotso90@gmail.com  
Licence : **MIT** (Libre d'utilisation et d'adaptation).
