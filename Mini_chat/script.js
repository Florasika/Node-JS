// ==========================
// 📦 Sélection des éléments
// ==========================
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send");
const userSelect = document.getElementById("user");

// ==========================
// 📦 Charger les messages
// ==========================
let messages = JSON.parse(localStorage.getItem("messages")) || [];

// ==========================
// 🕒 Formater l'heure
// ==========================
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
}

// ==========================
// 🎨 Afficher les messages
// ==========================
function displayMessages() {
    chatBox.innerHTML = "";

    messages.forEach((msg, index) => {
        const div = document.createElement("div");
        div.classList.add("message");

        // Style selon user
        if (msg.user === "User1") {
            div.classList.add("user1");
        } else {
            div.classList.add("user2");
        }

        // Contenu message
        div.innerHTML = `
            <strong>${msg.user}</strong> 
            <small>(${msg.time})</small><br>
            ${msg.text}
        `;

        // Bouton supprimer
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", () => {
            deleteMessage(index);
        });

        div.appendChild(deleteBtn);

        chatBox.appendChild(div);
    });

    scrollToBottom();
}

// ==========================
// ➕ Ajouter un message
// ==========================
function addMessage() {
    const text = messageInput.value.trim();
    const user = userSelect.value;

    if (text === "") return;

    const newMessage = {
        user: user,
        text: text,
        time: getCurrentTime()
    };

    messages.push(newMessage);

    saveMessages();
    messageInput.value = "";
    displayMessages();
}

// ==========================
// ❌ Supprimer un message
// ==========================
function deleteMessage(index) {
    messages.splice(index, 1);
    saveMessages();
    displayMessages();
}

// ==========================
// 🧹 Vider le chat
// ==========================
function clearChat() {
    if (confirm("Supprimer tous les messages ?")) {
        messages = [];
        saveMessages();
        displayMessages();
    }
}

// ==========================
// 💾 Sauvegarder
// ==========================
function saveMessages() {
    localStorage.setItem("messages", JSON.stringify(messages));
}

// ==========================
// ⬇️ Scroll automatique
// ==========================
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ==========================
// 🎯 Events
// ==========================
sendBtn.addEventListener("click", addMessage);

// Envoyer avec ENTER
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addMessage();
    }
});

// ==========================
// 🚀 Initialisation
// ==========================
displayMessages();


// ==========================
// (OPTIONNEL) Bouton clear
// ==========================
// 👉 Ajoute ce bouton dans ton HTML si tu veux l'utiliser :
// <button onclick="clearChat()">Vider le chat</button>