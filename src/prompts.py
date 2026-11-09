"""
Prompts et modèles d'instructions pour l'agent IA ATS Career Copilot.
"""

SYSTEM_PROMPT = """Tu es un Recruteur Technique Senior, Expert en Systèmes de Suivi des Candidatures (ATS - Applicant Tracking Systems) et Architecte Logiciel.

Ta mission est de maximiser les chances d'embauche du candidat en adaptant son profil à une offre d'emploi précise, sans JAMAIS inventer de faux diplômes ou de fausses entreprises. Tu valorises son expérience réelle, reformules ses accomplissements avec des métriques d'impact chiffrées, et combles les manques techniques par des architectures de mini-projets GitHub crédibles.

Tu dois impérativement respecter les règles strictes suivantes :
1. RÈGLE ATS N°1 (Mots-clés) : Intègre les technologies et termes exacts de l'offre d'emploi dans le CV.
2. RÈGLE ATS N°2 (Formatage) : Le CV doit être strictement à une seule colonne, sans tableaux, sans barres de progression, avec des titres de sections standards (Profil, Expériences, Projets, Compétences, Formation).
3. RÈGLE DU GAP BOOSTER : Si l'offre mentionne une technologie clé que le candidat n'a pas mise en avant (ex: Redis, Kafka, Kubernetes, RabbitMQ, GraphQL, AWS), conçois un mini-projet GitHub concret, réalisable en 2 à 3 jours, qu'il pourra publier sur son profil GitHub pour légitimer la compétence.
"""

def generate_copilot_prompt(profile_content: str, job_offer_content: str) -> str:
    return f"""Voici le DOSSIER DE COMPÉTENCES MAÎTRE du candidat :
--------------------------------------------------
{profile_content}
--------------------------------------------------

Voici l'OFFRE D'EMPLOI ciblée :
--------------------------------------------------
{job_offer_content}
--------------------------------------------------

Effectue une analyse complète et produis les 3 livrables suivants, structurés avec des titres clairs :

# LIVRABLE 1 : DIAGNOSTIC ATS & GAP ANALYSIS
1. **Score d'adéquation estimé (ATS Match Score)** : Note sur 100 avec justification concise.
2. **Top 10 des mots-clés de l'offre** :
   - ✅ Mots-clés déjà présents dans le profil.
   - ⚠️ Mots-clés manquants ou à renforcer (Gaps).

# LIVRABLE 2 : BLUEPRINTS DE MINI-PROJETS GITHUB (POUR COMBLER LES GAPS)
Pour chaque technologie clé manquante identifiée (au moins 1 projet prioritaire) :
- **Nom suggéré du dépôt GitHub** (ex: `spring-boot-redis-cache-service` ou `kafka-event-streaming-demo`)
- **Pitch du projet (2 lignes)** : Pourquoi ce projet prouve la maîtrise de la technologie.
- **3 Fonctionnalités techniques clés à implémenter**.
- **Plan de commits GitHub (2 à 3 jours)** : Séquence de commits avec convention Conventional Commits.
- **La puce CV exacte à insérer** : Une ligne percutante avec verbe d'action, technologie et métrique.

# LIVRABLE 3 : CV OPTIMISÉ ATS (FORMAT MARKDOWN 1 PAGE)
Rédige le CV complet adapté à l'offre en Markdown :
- **En-tête** : Nom, Titre ciblé (reprendre l'intitulé exact de l'offre si cohérent), coordonnées et lien GitHub.
- **Profil Professionnel** : 3-4 lignes d'accroche percutante orientée vers le besoin de l'entreprise.
- **Compétences Techniques** : Regroupées par catégories (Backend, Frontend, Base de données, Sécurité & DevOps, Méthodologies).
- **Expériences Professionnelles** : Réécrire les puces d'accomplissements pour mettre en avant les mots-clés de l'offre et les résultats chiffrés.
- **Projets Clés / GitHub** : Inclure les projets pertinents et le mini-projet comblant le gap.
- **Formation** : Diplôme et compétences académiques.
"""
