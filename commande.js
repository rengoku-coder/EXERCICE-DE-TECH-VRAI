const nom = "Awa";
const NomduProduit = "Ordinateur";
const PrixUnitaire = 250000;
const Quantité = 2;
const MontantTotal = PrixUnitaire * Quantité;
const fraisDeLivraison = 5000;
const TauxTVA = 18;
const MontantTVA = (MontantTotal*TauxTVA)/100;
const MontantTTC = MontantTotal + MontantTVA;
const Remise = 10000;
const MontantFinal = MontantTTC + fraisDeLivraison - Remise;
const PrixMoyenProduitTVA = MontantTTC / Quantité;

