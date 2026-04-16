// script.js

// Sélection des éléments
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

// Charger les tâches depuis localStorage
window.addEventListener('load', () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
        todos = savedTodos;
        renderTodos();
    }
});

// Ajouter une tâche
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = todoInput.value.trim();
    if (task) {
        todos.push({ text: task, done: false });
        todoInput.value = '';
        saveTodos();
        renderTodos();
    }
});

// Supprimer une tâche
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

// Marquer comme fait
function toggleDone(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
}

// Sauvegarder dans localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Afficher les tâches
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span style="text-decoration: ${todo.done ? 'line-through' : 'none'}">${todo.text}</span>
            <div>
                <button onclick="toggleDone(${index})">✔</button>
                <button onclick="deleteTodo(${index})">🗑</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}