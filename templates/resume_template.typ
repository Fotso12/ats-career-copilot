// Template Typst ATS-Friendly — Darryl Fotso
// Optimisé pour une compatibilité à 100% avec les analyseurs ATS (Workday, Taleo, etc.)

#set page(
  paper: "a4",
  margin: (x: 1.8cm, y: 1.5cm)
)

#set text(
  font: "Liberation Sans",
  size: 10pt,
  fill: rgb("#111827")
)

#let section_heading(title) = {
  v(0.6em)
  text(11pt, weight: "bold", fill: rgb("#1e3a8a"), upper(title))
  v(-0.3em)
  line(length: 100%, stroke: 0.8pt + rgb("#cbd5e1"))
  v(0.4em)
}

// En-tête
#align(center)[
  #text(16pt, weight: "bold")[Darryl Fotso] \
  #v(0.2em)
  #text(11pt, weight: "medium", fill: rgb("#3b82f6"))[DÉVELOPPEUR BACKEND JAVA & FULL-STACK] \
  #v(0.2em)
  #text(9pt)[
    Douala, Cameroun | tamofotso90\@gmail.com | github.com/Fotso12 | Français / Anglais
  ]
]

#section_heading("Profil Professionnel")
Développeur Backend et Full-Stack avec une solide maîtrise de l'écosystème Java (Spring Boot 3.3, Java 21) et des architectures web modernes (Next.js 14, React 18, PHP/Laravel 11). Expérience confirmée en conception N-Tiers, migrations de bases de données relationnelles avec Flyway, sécurisation par JWT et intégration continue CI/CD. Rigoureux, orienté Clean Code et démarche qualité (TDD, couverture de code 88%+).

#section_heading("Compétences Techniques")
- *Backend & Langages :* Java 21, Spring Boot 3.3, Spring Data JPA, Spring Security 6, PHP 8.3, Laravel 11, TypeScript, Node.js, RESTful APIs (RFC 7807), Architecture N-Tiers.
- *Frontend :* React 18, Next.js 14, Tailwind CSS, Bootstrap 5.3, Zod, HTML5/CSS3.
- *Bases de Données :* PostgreSQL 16, MySQL 8, Flyway, Hibernate, Optimisation requêtes SQL (Indexation, @EntityGraph).
- *Sécurité & DevOps :* Spring Security, JWT (JJWT 0.12), BCrypt, Docker multi-stage, Docker Compose, GitHub Actions CI/CD, SonarQube, JaCoCo, Actuator.
- *Tests & Qualité :* JUnit 5, Mockito, AssertJ, Vitest, Playwright, TDD, Clean Code, Agile/Scrum.

#section_heading("Expériences Professionnelles")

*Développeur Backend Java / Spring Boot (Stage)* | *Dooke Corporation* #h(1fr) 04/2026 – 09/2026
- Conception et implémentation de l'architecture N-Tiers d'un ERP d'entreprise sous Spring Boot 3.3 et Java 21.
- Développement de 32 endpoints RESTful sécurisés (collaborateurs, contrats, congés, parc matériel IT).
- Gestion des migrations incrémentales PostgreSQL avec Flyway (V1 à V4) garantissant zéro interruption de service.
- Implémentation du système d'authentification stateless avec Spring Security 6, JWT (Access & Refresh Tokens) et hachage BCrypt.
- Atteinte d'un taux de couverture de tests unitaires et d'intégration de 88.4% (JUnit 5, Mockito, JaCoCo) et validation des Quality Gates SonarQube.
- Conteneurisation de la stack via Docker multi-stage et automatisation des vérifications via GitHub Actions.

*Développeur Frontend / Full-Stack Next.js (Stage)* | *Dooke Corporation* #h(1fr) 05/2025 – 08/2025
- Modernisation de la plateforme client vers Next.js 14, React 18 et TypeScript avec amélioration du temps de chargement (LCP < 1.2s).
- Création d'un système de composants réutilisables et responsive sous Tailwind CSS.
- Sécurisation et validation des formulaires complexes avec Zod et React Hook Form.
- Rédaction de tests unitaires avec Vitest et tests de régression E2E avec Playwright.

*Développeur Web PHP / Laravel (Stage Académique)* | *SAV-YTECH* #h(1fr) 06/2024 – 08/2024
- Modélisation de la base de données relationnelle MySQL selon les règles Merise (MCD, MLD).
- Développement des modules de gestion du service après-vente et tickets d'intervention sous Laravel 11 et Blade.
- Conception d'interfaces réactives avec Bootstrap 5.3 et validation des APIs avec Postman.

#section_heading("Projets Clés & Open Source (GitHub)")
- *dooke-erp-backend (Java 21, Spring Boot 3.3, PostgreSQL, Docker) :* API d'entreprise pour gestion RH et parc IT (219 commits).
- *dooke-platform-migration (Next.js 14, TypeScript, Tailwind, Vitest) :* Plateforme web modulaire et performante.
- *SAV-YTECH (Laravel 11, PHP 8.3, Blade, MySQL) :* Application métier de gestion de SAV.
- *collecte-epargne-app :* Solution de gestion d'épargne communautaire (Spring Boot / Flutter).

#section_heading("Formation")
*Diplôme d'Ingénieur / Licence en Génie Logiciel* #h(1fr) En cours / Validé
