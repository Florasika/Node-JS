// 1. Sélectionner les éléments du DOM
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

// 2. Initialiser une variable pour le compteur
let compteur = 0;

// 3. Ajouter un événement "click" au bouton principal
btn.addEventListener("click", () => {
  compteur++; // on ajoute 1
  count.textContent = compteur; // on met à jour le texte
});

// 4. Bouton de réinitialisation
reset.addEventListener("click", () => {
  compteur = 0;
  count.textContent = compteur;
});