function addTask(columnId) {
  const text = prompt("Nom de la tâche");
  if (!text) return;

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerText = text;

  // drag
  task.draggable = true;

  addDragEvents(task);

  document.getElementById(columnId).appendChild(task);
}

function addDragEvents(task) {
  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
}

const columns = document.querySelectorAll(".task-list");

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();

    const dragging = document.querySelector(".dragging");
    column.appendChild(dragging);
  });
});
function saveData() {
  const data = {
    todo: document.getElementById("todo").innerHTML,
    doing: document.getElementById("doing").innerHTML,
    done: document.getElementById("done").innerHTML
  };

  localStorage.setItem("trello", JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("trello"));

  if (!data) return;

  document.getElementById("todo").innerHTML = data.todo;
  document.getElementById("doing").innerHTML = data.doing;
  document.getElementById("done").innerHTML = data.done;

  document.querySelectorAll(".task").forEach(addDragEvents);
}
loadData();

document.addEventListener("dragend", saveData);