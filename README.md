# ATS Career Copilot

Outil en ligne de commande qui analyse une offre d'emploi, mesure l'écart avec un profil de compétences, puis produit un diagnostic ATS, un CV adapté et un plan de mini-projet pour combler les compétences manquantes.

Le projet fonctionne sans dépendance externe et sans clé API. Il peut aussi appeler un service d'IA si une clé est fournie.

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Fonctionnement](#fonctionnement)
- [Architecture](#architecture)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Format du fichier d'offre](#format-du-fichier-doffre)
- [Modes d'exécution](#modes-dexécution)
- [Sorties générées](#sorties-générées)
- [Export PDF compatible ATS](#export-pdf-compatible-ats)
- [Personnalisation](#personnalisation)
- [Limites connues](#limites-connues)
- [Licence](#licence)
- [Auteur](#auteur)

## Fonctionnalités

- Analyse locale des mots-clés, sans appel réseau.
- Score d'adéquation estimé entre le profil et l'offre.
- Liste des technologies déjà présentes dans le profil.
- Liste des technologies demandées par l'offre mais absentes du profil.
- Génération de trois livrables :
  - un diagnostic ATS avec les mots-clés à renforcer ;
  - un blueprint de mini-projet GitHub pour chaque compétence manquante ;
  - un CV complet au format Markdown, sur une page, en une seule colonne.
- Deux modes de génération : sans clé API ou avec clé API.
- Modèle Typst prêt à l'emploi pour produire un PDF lisible par les robots de recrutement.
- Aucune bibliothèque à installer.

## Fonctionnement

1. Le programme charge le dossier de compétences `data/PROFILE_MASTER.md`.
2. Il charge le texte de l'offre d'emploi fourni en argument.
3. Il compare les deux documents avec un catalogue de technologies défini dans `src/ats_analyzer.js`. La comparaison se fait mot entier, sans distinction de casse.
4. Il calcule un score :

   ```text
   score = technologies présentes dans les deux documents / technologies détectées dans l'offre * 100
   ```

5. Il construit un prompt complet à partir de `src/prompts.js`.
6. Il appelle le service d'IA si une clé est disponible. Sinon, il écrit le prompt dans `outputs/` pour un usage manuel.

## Architecture

```text
ats-career-copilot/
  data/
    PROFILE_MASTER.md            Dossier de compétences du candidat
  examples/
    offre_stage_java_spring.txt  Offre d'emploi d'exemple
  outputs/                       Diagnostics, CV et prompts générés
  src/
    ats_analyzer.js              Analyse locale des mots-clés et calcul du score
    copilot.js                   Chargement des fichiers, appels API, écriture des sorties
    prompts.js                   Instructions envoyées au service d'IA
  templates/
    resume_template.typ          Modèle Typst pour un PDF ATS en une colonne
  copilot.ps1                    Lanceur Windows PowerShell
  index.js                       Point d'entrée en ligne de commande
  package.json
```

## Prérequis

- Node.js 18 ou supérieur. La version 18 est le minimum car le projet utilise `fetch` nativement.
- Aucun compte payant n'est nécessaire.
- Facultatif : une clé API si vous voulez la génération automatique.
- Facultatif : un éditeur Typst ou le site typst.app pour produire le PDF.

## Installation

```bash
git clone https://github.com/Fotso12/ats-career-copilot.git
cd ats-career-copilot
node --version
```

Le projet n'a aucune dépendance, donc `npm install` n'est pas nécessaire.

## Utilisation

Placez le texte complet de l'offre dans un fichier `.txt`, puis lancez l'une des commandes suivantes.

```bash
# Avec npm
npm start ma_nouvelle_offre.txt

# Directement avec Node.js
node index.js ma_nouvelle_offre.txt

# Sous Windows PowerShell
.\copilot.ps1 ma_nouvelle_offre.txt
```

Sans argument, le programme utilise l'offre d'exemple `examples/offre_stage_java_spring.txt`.

```bash
node index.js
```

La console affiche le score, les technologies trouvées, les technologies manquantes, puis le chemin du fichier généré.

## Format du fichier d'offre

- Fichier texte brut, encodage UTF-8.
- Collez l'annonce entière, y compris le titre, les missions et le profil recherché.
- Un fichier par offre. Le nom du fichier n'a pas d'importance.
- Les formats PDF, DOCX et HTML ne sont pas lus directement. Convertissez le contenu en texte avant l'analyse.

## Modes d'exécution

### Mode sans clé API

C'est le mode par défaut et il ne coûte rien.

1. L'analyse locale s'exécute normalement.
2. Le programme écrit un fichier de prompt horodaté dans `outputs/`. Son nom exact est affiché dans la console.
3. Ouvrez ce fichier, copiez son contenu intégral et collez-le dans l'assistant conversationnel de votre choix.
4. L'assistant renvoie le diagnostic ATS, le blueprint du mini-projet et le CV adapté.

Ce mode convient si vous n'avez pas de clé ou si vous préférez choisir vous-même le service utilisé.

### Mode avec clé API

Le programme reconnaît deux variables d'environnement, une par fournisseur pris en charge. Les noms exacts sont lus dans `src/copilot.js`, dans la fonction `runCopilot`. Ouvrez ce fichier et repérez les deux appels à `process.env`.

Définissez la variable correspondant au fournisseur dont vous disposez.

```powershell
# Windows PowerShell
$env:NOM_DE_LA_VARIABLE = "votre_cle"
node index.js ma_nouvelle_offre.txt
```

```bash
# Linux ou macOS
export NOM_DE_LA_VARIABLE="votre_cle"
node index.js ma_nouvelle_offre.txt
```

Si les deux variables sont définies, le fournisseur vérifié en premier dans le code est utilisé. En cas d'erreur d'appel, le programme bascule automatiquement en mode sans clé et écrit le prompt dans `outputs/`.

Ne versionnez jamais vos clés. Le fichier `.env` est déjà ignoré par Git.

## Sorties générées

Toutes les sorties sont écrites dans `outputs/` avec un horodatage.

| Fichier | Contenu |
| --- | --- |
| `cv_adapte_<horodatage>.md` | Diagnostic, blueprint et CV produits par le service d'IA |
| Fichier de prompt horodaté | Instructions complètes à copier dans un assistant conversationnel |

Le dossier `outputs/` est ignoré par Git, sauf le fichier `.gitkeep`. Vos CV et vos prompts restent donc locaux.

## Export PDF compatible ATS

Le fichier `templates/resume_template.typ` contient une mise en page en une seule colonne, sans tableau ni barre de progression, avec des titres de sections standards.

1. Ouvrez typst.app ou votre éditeur Typst local.
2. Chargez `templates/resume_template.typ`.
3. Remplacez le contenu par les sections du CV généré.
4. Exportez en PDF.

Le PDF produit contient du texte sélectionnable, ce qui permet aux robots de recrutement d'extraire correctement le contenu.

## Personnalisation

- `data/PROFILE_MASTER.md` : source de vérité du candidat. Mettez-le à jour avant chaque candidature.
- `src/ats_analyzer.js` : catalogue `TECH_CATALOG`. Ajoutez les technologies que vous voulez détecter.
- `src/prompts.js` : instructions et structure des trois livrables.
- `templates/resume_template.typ` : nom, coordonnées, ordre des sections et couleurs.

## Limites connues

- L'analyse locale repose sur une correspondance de mots entiers. Une technologie écrite différemment dans l'offre peut ne pas être détectée.
- Le score est une estimation interne, pas une note officielle d'un logiciel de recrutement.
- Le programme ne lit que des fichiers texte.
- Le programme ne génère pas de PDF. La conversion se fait avec Typst.
- Le contenu généré doit toujours être relu. Aucun diplôme, aucune entreprise et aucune expérience ne doit être inventé.

## Licence

MIT. Utilisation, modification et redistribution libres, avec conservation de la mention de licence.

## Auteur

Darryl Fotso
GitHub : https://github.com/Fotso12
Email : tamofotso90@gmail.com
