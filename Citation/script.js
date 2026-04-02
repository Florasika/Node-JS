// 1. Tableau de citations
const quotes = [
    {
        text: "Le succès n’est pas final, l’échec n’est pas fatal.",
        author: "Winston Churchill"
    },
    {
        text: "N’attends pas. Le moment parfait n’existera jamais.",
        author: "Napoleon Hill"
    },
    {
        text: "Agis comme s’il était impossible d’échouer.",
        author: "Dorothea Brande"
    },
    {
        text: "Fais de ta vie un rêve, et d’un rêve une réalité.",
        author: "Antoine de Saint-Exupéry"
    }
];

// 2. Récupérer les éléments HTML
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const button = document.getElementById("btn");

// 3. Fonction pour générer une citation aléatoire
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = selectedQuote.text;
    authorElement.textContent = "- " + selectedQuote.author;
}

// 4. Event
button.addEventListener("click", generateQuote);