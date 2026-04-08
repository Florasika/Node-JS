// Sélection des éléments
const button = document.getElementById("btn");
const colorText = document.getElementById("color-code");

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Événement au clic
button.addEventListener("click", () => {
  const newColor = getRandomColor();

  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});