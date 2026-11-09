/**
 * Analyseur de mots-clés ATS local et détection d'écarts techniques (Gaps).
 */

const TECH_CATALOG = [
  "Java", "Spring Boot", "Spring Data", "Spring Security", "Hibernate", "JPA",
  "PHP", "Laravel", "Blade", "Symfony",
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express", "Angular", "Vue",
  "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Oracle",
  "Docker", "Kubernetes", "Docker Compose", "CI/CD", "GitHub Actions", "GitLab CI", "Jenkins",
  "AWS", "Azure", "GCP", "Cloud",
  "Kafka", "RabbitMQ", "ActiveMQ", "Microservices", "REST", "GraphQL", "gRPC",
  "JUnit", "Mockito", "JaCoCo", "SonarQube", "Vitest", "Jest", "Playwright", "Cypress", "TDD",
  "Tailwind", "Bootstrap", "Zod", "Flyway", "Liquibase", "JWT", "BCrypt", "OAuth2", "Linux"
];

export function analyzeOfferGaps(profileText, offerText) {
  const profileLower = profileText.toLowerCase();
  const offerLower = offerText.toLowerCase();

  const detectedInOffer = [];
  const matches = [];
  const gaps = [];

  for (const tech of TECH_CATALOG) {
    const techLower = tech.toLowerCase();
    // Recherche de mot entier pour éviter les faux positifs
    const regex = new RegExp(`\\b${techLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    
    if (regex.test(offerLower)) {
      detectedInOffer.push(tech);
      if (regex.test(profileLower)) {
        matches.push(tech);
      } else {
        gaps.push(tech);
      }
    }
  }

  const score = detectedInOffer.length > 0 
    ? Math.round((matches.length / detectedInOffer.length) * 100) 
    : 85;

  return {
    totalDetected: detectedInOffer.length,
    score,
    matches,
    gaps
  };
}
