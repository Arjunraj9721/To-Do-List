const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please write something!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  const span = document.createElement("span");
  span.innerHTML = "&#10006;";
  li.appendChild(span);

  taskList.appendChild(li);
  inputBox.value = "";
  saveTasks();
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();
