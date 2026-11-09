# ==============================================================================
# LANCEUR WINDOWS ATS CAREER COPILOT
# Usage : .\copilot.ps1 [chemin_vers_offre.txt]
# ==============================================================================

param(
    [string]$OfferFile = "examples/offre_stage_java_spring.txt"
)

Write-Host "Lancement de ATS Career Copilot avec l'offre : $OfferFile" -ForegroundColor Cyan
node (Join-Path $PSScriptRoot "index.js") $OfferFile
