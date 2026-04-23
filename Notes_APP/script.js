const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

// Charger les notes depuis localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Sauvegarder
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Afficher les notes
function displayNotes() {
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    noteDiv.innerHTML = `
      <p>${note}</p>
      <span class="delete-btn" onclick="deleteNote(${index})">❌</span>
    `;

    notesContainer.appendChild(noteDiv);
  });
}

// Ajouter une note
addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();

  if (noteText === "") return;

  notes.push(noteText);
  noteInput.value = "";

  saveNotes();
  displayNotes();
});

// Supprimer une note
function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
}

// Initialisation
displayNotes();