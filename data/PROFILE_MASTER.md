# DOSSIER DE COMPÉTENCES MAÎTRE (PROFILE MASTER)
> **Ce document est la source de vérité absolue pour toute candidature.**
> Il ne doit pas être envoyé brut au recruteur. Il sert de base de connaissances pour l'agent IA d'adaptation ATS.

---

## 1. IDENTITÉ & LIENS PROFESSIONNELS
* **Nom complet :** Darryl Fotso
* **Titre actuel / ciblé :** Développeur Backend Java / Full-Stack & Ingénieur d'Études
* **Email :** tamofotso90@gmail.com
* **Localisation :** Douala, Cameroun (Ouvert au remote, missions internationales & relocalisation)
* **GitHub :** [https://github.com/Fotso12](https://github.com/Fotso12)
* **Langues :** Français (Natif / Courant), Anglais (Technique / Professionnel)

---

## 2. SYNTHÈSE DE LA STACK TECHNIQUE (EXHAUSTIVE)

### Backend & Langages
* **Java :** Java 17 LTS, Java 21 LTS, Java Core, Collections, Concurrency, Stream API, Records, Sealed Classes.
* **Spring Framework & Boot :** Spring Boot 3.3+, Spring Data JPA, Spring Security 6, Spring Web MVC, Spring Validation, Spring Boot Actuator.
* **PHP :** PHP 8.2 / 8.3, Laravel 11, Blade templating, Eloquent ORM.
* **TypeScript / JavaScript :** Node.js, Express basics, ES6+, Async/Await.
* **Architecture Logicielle :** Clean Architecture, N-Tiers (Controller-Service-Repository), Domain-Driven Design (bases), RESTful API Design (RFC 7807 Problem Details), Microservices (principes), Design Patterns (Factory, Builder, Singleton, Strategy, Observer).

### Frontend & Web
* **Frameworks & UI :** React 18, Next.js 14 (App Router, Server Actions, SSR/SSG), TypeScript.
* **Styling :** Tailwind CSS, CSS Modules, Responsive Design, Flexbox/Grid, Bootstrap 5.3.
* **State & Data :** React Hooks, Context API, TanStack React Query, Axios.
* **Validation & Formulaires :** Zod, React Hook Form.

### Bases de Données & Persistance
* **Relationnel :** PostgreSQL 16, MySQL 8.
* **ORM & Mapping :** Hibernate, Spring Data JPA, Eloquent, MapStruct.
* **Migrations de Schéma :** Flyway (V1 à V4+ incrémentales), Laravel Migrations.
* **Modélisation :** Merise (MCD, MLD), Modélisation Relationnelle, Indexation (B-tree, GIN), Analyse des plans d'exécution EXPLAIN ANALYZE, Optimisation des requêtes N+1 (`@EntityGraph`, JOIN FETCH).

### Sécurité & Authentification
* **Protocoles & Mécanismes :** Spring Security 6, JWT (JJWT 0.12 - Access & Refresh Tokens), BCrypt (facteur de hachage 12), Role-Based Access Control (RBAC), CORS, CSRF, protection contre les attaques par force brute (Rate Limiting).
* **Conformité & Bonnes Pratiques :** OWASP Top 10, sanitization des entrées, gestion sécurisée des secrets d'environnement.

### DevOps, Conteneurs & CI/CD
* **Conteneurisation :** Docker, Dockerfile multi-stage builds (Eclipse Temurin), Docker Compose (PostgreSQL, pgAdmin, App).
* **CI/CD :** GitHub Actions (pipelines automatisés : Build, Test, JaCoCo Coverage, Quality Gate).
* **Qualité & Métriques :** SonarQube, JaCoCo (couverture 88%+), Clean Code, SOLID, DRY.
* **Observabilité :** Spring Boot Actuator, Prometheus metrics, Logging centralisé avec Logback (MDC X-Correlation-ID).
* **Contrôle de Version :** Git, Git Flow, Conventionnal Commits, GitHub.

### Tests & Automatisation
* **Unitaires & Intégration Backend :** JUnit 5, Mockito, AssertJ, Spring MockMvc, Testcontainers PostgreSQL.
* **Frontend & E2E :** Vitest, React Testing Library, Playwright.

---

## 3. EXPÉRIENCES PROFESSIONNELLES DÉTAILLÉES

### [Expérience 1] Développeur Backend Java / Spring Boot (Stage d'entreprise)
* **Entreprise :** Dooke Corporation — Douala, Cameroun
* **Période :** Avril 2026 – Septembre 2026 (6 mois)
* **Projet :** `dooke-erp-backend` — Conception et développement de la plateforme ERP interne (Ressources Humaines & Parc Matériel IT).
* **Dépôt GitHub :** [https://github.com/Fotso12/dooke-erp-backend](https://github.com/Fotso12/dooke-erp-backend)
* **Réalisations & Métriques :**
  * Développement complet de **32 endpoints RESTful** sécurisés pour la gestion des collaborateurs, contrats (CDI, CDD, Stage), demandes de congés et inventaire du parc matériel.
  * Mise en œuvre de l'architecture N-Tiers stricte sous **Spring Boot 3.3** et **Java 21 LTS**, réduisant la dette technique et facilitant la maintenance.
  * Conception et versioning de la base PostgreSQL 16 avec **Flyway** (migrations incrémentales V1 à V4), zéro régression en production.
  * Sécurisation de l'accès applicatif via **Spring Security 6** et **JWT (JJWT 0.12)** avec cycle de rotation des Refresh Tokens et hachage BCrypt.
  * Résolution des requêtes N+1 et indexation avancée, diminuant les temps de réponse moyens sous **45 ms** sur des charges de 500 req/s.
  * Mise en place d'une suite de tests automatisés (**JUnit 5, Mockito, MockMvc**) atteignant **88.4% de couverture de code (JaCoCo)** et validation de la Quality Gate SonarQube sans code smell.
  * Déploiement conteneurisé avec **Docker multi-stage** et pipeline **GitHub Actions CI**.

### [Expérience 2] Développeur Frontend / Full-Stack Next.js & TypeScript
* **Entreprise :** Dooke Corporation — Douala, Cameroun
* **Période :** Mai 2025 – Août 2025 (4 mois)
* **Projet :** `dooke-platform-migration` — Modernisation et refonte de la plateforme web client.
* **Dépôt GitHub :** [https://github.com/Fotso12/dooke-platform-migration](https://github.com/Fotso12/dooke-platform-migration)
* **Réalisations & Métriques :**
  * Migration de l'architecture legacy vers **Next.js 14**, **React 18** et **TypeScript**, améliorant le Core Web Vitals (LCP < 1.2s).
  * Développement d'un système de Design System modulaire sous **Tailwind CSS** garantissant une cohérence visuelle 100% responsive.
  * Validation stricte des données côté client et formulaires via **Zod** et **React Hook Form**.
  * Intégration de tests unitaires avec **Vitest** et de scénarios E2E critiques avec **Playwright**.

### [Expérience 3] Développeur Web PHP / Laravel (Stage Académique)
* **Entreprise :** SAV-YTECH
* **Période :** Juin 2024 – Août 2024 (3 mois)
* **Projet :** `SAV-YTECH` — Application de gestion du service après-vente et suivi des interventions techniques.
* **Dépôt GitHub :** [https://github.com/Fotso12/SAV-YTECH](https://github.com/Fotso12/SAV-YTECH)
* **Réalisations & Métriques :**
  * Modélisation de la base de données relationnelle MySQL selon la méthode **Merise (MCD, MLD)**.
  * Développement des modules de gestion des tickets, des équipements clients et des rapports d'intervention avec **Laravel 11**, **PHP 8.3** et **Blade**.
  * Intégration d'une interface utilisateur réactive avec **Bootstrap 5.3** et JavaScript moderne.
  * Rédaction de la documentation des APIs et tests des endpoints avec **Postman**.

---

## 4. PROJETS PERSONNELS & OPEN SOURCE
* **`collecte-epargne-app` :** Application de collecte d'épargne et tontine (Backend Spring Boot, Frontend Angular, Mobile Flutter).
* **`BackendErpLaravel` :** Prototype d'architecture ERP modulaire en Laravel 11.
* **`suivi_academique` :** Plateforme de suivi pédagogique et gestion des notes pour institution académique (Spring Boot & PostgreSQL).
* **`ats-career-copilot` :** Agent IA autonome pour l'analyse d'offres d'emploi, matching ATS et génération de mini-projets GitHub ciblés.

---

## 5. FORMATION & CERTIFICATIONS
* **Diplôme d'Ingénieur / Licence en Génie Logiciel / Informatique** (En cours / Validé)
* **Méthodologies :** Agile/Scrum, TDD (Test-Driven Development), Clean Code, Git Flow.
