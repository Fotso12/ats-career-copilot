import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { SYSTEM_PROMPT, buildCopilotPrompt } from "./prompts.js";
import { analyzeOfferGaps } from "./ats_analyzer.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: SYSTEM_PROMPT },
          { text: prompt }
        ]
      }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 4000
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur API Gemini (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "Aucune réponse générée.";
}

async function callClaude(apiKey, prompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur API Claude (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text || "Aucune réponse générée.";
}

export async function runCopilot(offerFilePath) {
  console.log("\n=======================================================");
  console.log("   🚀 ATS CAREER COPILOT — DARRYL FOTSO");
  console.log("=======================================================\n");

  // 1. Chargement du profil maître
  const profilePath = path.join(rootDir, "data", "PROFILE_MASTER.md");
  if (!fs.existsSync(profilePath)) {
    console.error(`❌ Fichier de profil introuvable : ${profilePath}`);
    process.exit(1);
  }
  const profileContent = fs.readFileSync(profilePath, "utf-8");

  // 2. Chargement de l'offre d'emploi
  let offerContent = "";
  if (offerFilePath && fs.existsSync(offerFilePath)) {
    offerContent = fs.readFileSync(offerFilePath, "utf-8");
  } else {
    // Fichier d'exemple par défaut
    const defaultOffer = path.join(rootDir, "examples", "offre_stage_java_spring.txt");
    if (fs.existsSync(defaultOffer)) {
      console.log("ℹ️  Aucun fichier d'offre spécifié. Utilisation de l'exemple par défaut.");
      offerContent = fs.readFileSync(defaultOffer, "utf-8");
    } else {
      console.error("❌ Veuillez fournir le chemin vers un fichier d'offre d'emploi.");
      process.exit(1);
    }
  }

  // 3. Analyse heuristique locale des mots-clés
  console.log("🔍 [1/3] Analyse locale des mots-clés et détection des écarts...");
  const analysis = analyzeOfferGaps(profileContent, offerContent);
  console.log(`   👉 Score d'adéquation estimé : ${analysis.score}%`);
  console.log(`   ✅ Technologies matchées (${analysis.matches.length}) : ${analysis.matches.join(", ") || "Aucune"}`);
  if (analysis.gaps.length > 0) {
    console.log(`   ⚠️  Gaps détectés (${analysis.gaps.length}) : ${analysis.gaps.join(", ")}`);
  } else {
    console.log("   ✨ Aucun gap majeur détecté ! Couverture technique excellente.");
  }

  // 4. Construction du prompt IA complet
  const fullPrompt = buildCopilotPrompt(profileContent, offerContent);

  // 5. Appel IA (Gemini ou Claude si clé présente, sinon export de prompt)
  const geminiKey = process.env.GEMINI_API_KEY;
  const claudeKey = process.env.ANTHROPIC_API_KEY;

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const outputsDir = path.join(rootDir, "outputs");
  if (!fs.existsSync(outputsDir)) fs.mkdirSync(outputsDir, { recursive: true });

  if (geminiKey) {
    console.log("\n🤖 [2/3] Génération automatique via l'API Google Gemini (Gratuit)...");
    try {
      const result = await callGemini(geminiKey, fullPrompt);
      const outputFile = path.join(outputsDir, `cv_adapte_${timestamp}.md`);
      fs.writeFileSync(outputFile, result, "utf-8");
      console.log(`✅ [3/3] Résultat complet généré et sauvegardé dans :`);
      console.log(`   📄 ${outputFile}`);
      console.log("\n--- APERÇU DU RÉSULTAT IA ---\n");
      console.log(result.slice(0, 800) + "\n\n... (résultat complet dans le fichier)");
      return;
    } catch (err) {
      console.warn(`⚠️ Échec appel Gemini (${err.message}). Bascule en mode Prompt Export.`);
    }
  } else if (claudeKey) {
    console.log("\n🤖 [2/3] Génération automatique via l'API Anthropic Claude...");
    try {
      const result = await callClaude(claudeKey, fullPrompt);
      const outputFile = path.join(outputsDir, `cv_adapte_${timestamp}.md`);
      fs.writeFileSync(outputFile, result, "utf-8");
      console.log(`✅ [3/3] Résultat complet généré et sauvegardé dans :`);
      console.log(`   📄 ${outputFile}`);
      return;
    } catch (err) {
      console.warn(`⚠️ Échec appel Claude (${err.message}). Bascule en mode Prompt Export.`);
    }
  }

  // 6. Mode 100% Gratuit / Sans Clé API (Export du Meta-Prompt prêt à coller dans Claude.ai)
  console.log("\n💡 [2/3] Mode Sans Clé API (100% Gratuit) activé.");
  const promptExportFile = path.join(outputsDir, `prompt_pour_claude_${timestamp}.md`);
  const fullContentToCopy = `${SYSTEM_PROMPT}\n\n=========================================\n\n${fullPrompt}`;
  fs.writeFileSync(promptExportFile, fullContentToCopy, "utf-8");

  console.log(`✅ [3/3] Le Prompt Maître compilé a été généré avec succès !`);
  console.log(`   📂 Fichier : ${promptExportFile}`);
  console.log("\n📋 INSTRUCTIONS POUR UTILISER DANS CLAUDE.AI (GRATUIT) :");
  console.log("   1. Ouvrez https://claude.ai dans votre navigateur.");
  console.log(`   2. Copiez tout le contenu du fichier généré : ${promptExportFile}`);
  console.log("   3. Collez-le dans Claude. Claude vous retournera en 30 secondes :");
  console.log("      - Le diagnostic ATS et les mots-clés.");
  console.log("      - Le blueprint du mini-projet GitHub pour combler les technologies manquantes.");
  console.log("      - Votre CV personnalisé prêt pour le poste !");
}
