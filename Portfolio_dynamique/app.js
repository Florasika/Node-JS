const container = document.getElementById("projects-container");

fetch("projects.json")
  .then(response => {
    console.log("STATUS:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("DATA:", data);
    displayProjects(data);
  })
  .catch(error => {
    console.error("ERROR:", error);
  });

function displayProjects(projects) {
  console.log("DISPLAY FUNCTION CALLED");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Voir le projet</a>
    `;

    container.appendChild(card);
  });
}