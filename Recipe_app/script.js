// Sélection des éléments
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

// 🔍 Fonction principale pour récupérer les recettes
async function getRecipes(query) {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur réseau");
    }

    const data = await response.json();
    return data.meals;

  } catch (error) {
    results.innerHTML = "<p>Erreur lors du chargement 😢</p>";
    console.error(error);
  }
}

// 🎯 Affichage des recettes
function displayRecipes(meals) {
  results.innerHTML = "";

  if (!meals) {
    results.innerHTML = "<p>Aucune recette trouvée</p>";
    return;
  }

  meals.forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <button class="details-btn" data-id="${meal.idMeal}">
        Voir recette
      </button>
    `;

    results.appendChild(card);
  });

  // Ajouter les events sur chaque bouton "Voir recette"
  document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      showDetails(id);
    });
  });
}

// 📖 Afficher les détails d’une recette
async function showDetails(id) {
  try {
    results.innerHTML = "<p>Chargement des détails...</p>";

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const response = await fetch(url);
    const data = await response.json();

    const meal = data.meals[0];

    // UI détail (remplace le contenu)
    results.innerHTML = `
      <div class="card">
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p><strong>Catégorie :</strong> ${meal.strCategory}</p>
        <p><strong>Origine :</strong> ${meal.strArea}</p>
        <p><strong>Instructions :</strong><br>${meal.strInstructions}</p>
        <button id="backBtn">⬅ Retour</button>
      </div>
    `;

    // bouton retour
    document.getElementById("backBtn").addEventListener("click", () => {
      searchBtn.click();
    });

  } catch (error) {
    results.innerHTML = "<p>Erreur lors du chargement 😢</p>";
    console.error(error);
  }
}

// 🚀 Lancer une recherche
async function handleSearch() {
  const query = searchInput.value.trim();

  if (query === "") {
    results.innerHTML = "<p>Veuillez entrer un mot-clé</p>";
    return;
  }

  // Loader
  results.innerHTML = "<p>Chargement...</p>";

  const meals = await getRecipes(query);
  displayRecipes(meals);
}

// 🖱️ Click bouton
searchBtn.addEventListener("click", handleSearch);

// ⌨️ Touche Entrée
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});