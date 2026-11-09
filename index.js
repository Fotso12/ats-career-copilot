#!/usr/bin/env node

import { runCopilot } from "./src/copilot.js";

const offerArg = process.argv[2];
runCopilot(offerArg).catch((err) => {
  console.error("❌ Erreur d'exécution :", err);
  process.exit(1);
});
