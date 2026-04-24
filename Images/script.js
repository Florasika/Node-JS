const API_KEY = "tA8f474JnohgCZH3PIIODn2SCMYcQLfCt9ZUrbfwtROLbVqDtd7ABi9Y";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const gallery = document.getElementById("gallery");

async function searchImages(query) {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: API_KEY
      }
    });

    const data = await response.json();
    displayImages(data.photos);

  } catch (error) {
    console.error("Erreur :", error);
  }
}

function displayImages(images) {
  gallery.innerHTML = "";

  images.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src.medium;
    img.alt = photo.photographer;

    gallery.appendChild(img);
  });
}

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchImages(query);
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});