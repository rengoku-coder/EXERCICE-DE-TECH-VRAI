const budgetClient = 20000;
const prixCahier = 4000;
const quantitéC = 4;
const prixStylo = 1000;
const quantitéS = 3;
const montantCahier = prixCahier*quantitéC;
const montantStylo = prixStylo*quantitéS;
const MontantTotalAchat = montantCahier + montantStylo ;
console.log("");
console.log("===== CAISSE =====");
console.log("Cahiers :", montantCahier);
console.log("Stylos :", montantStylo);
console.log("Total :", MontantTotalAchat)
console.log("Budget :", budgetClient);
if (budgetClient <= MontantTotalAchat){console.log("Budget insuffissant");} else {console.log("Buget insuffisant")}
console.log("");
for (let i = 0; i < 6; i++) {console.log("Achat numéro", i);}
