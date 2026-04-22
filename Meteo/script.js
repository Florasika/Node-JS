const apiKey = "3d24413d2beed70a38ac8cbb91ba6810";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherCard = document.getElementById("weatherResult");

// Event
searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  getWeather(city);
});

async function getWeather(city) {
  if (!city) return;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      alert("Ville non trouvée");
      return;
    }

    displayWeather(data);

  } catch (error) {
    console.error("Erreur :", error);
  }
}

function displayWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `🌡️ ${data.main.temp}°C`;
  description.textContent = `☁️ ${data.weather[0].description}`;

  weatherCard.classList.remove("hidden");
}