const budgetClient = 20000;
const prixCahier = 1500;
const quantitéC = 4;
const prixStylo = 500;
const quantitéS = 3;
const montantCahier = prixCahier*quantitéC;
const montantStylo = prixStylo*quantitéS;
const MontantTotalAchat = montantCahier + montantStylo ;

if (budgetClient >= MontantTotalAchat){console.log("Budget suffissant");} else {console.log("Buget insuffisant")}