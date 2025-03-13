// Dark Mode Toggle
const modeToggle = document.querySelector(".mode-toggle");
const body = document.body;
let isDarkMode = false;

modeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode");
  modeToggle.classList.toggle("fa-moon");
  modeToggle.classList.toggle("fa-sun");
});

// Set Min Date for Date Input
const dateInput = document.getElementById("dateInput");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Open Calendar on Click
dateInput.addEventListener("focus", () => {
  dateInput.showPicker();
});

// Add Task
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const ampmInput = document.getElementById("ampmInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  const date = dateInput.value;
  const hour = hourInput.value;
  const minute = minuteInput.value.padStart(2, "0");
  const ampm = ampmInput.value;

  if (!task || !date || !hour || !minute) {
    alert("Please fill all fields!");
    return;
  }

  if (hour < 1 || hour > 12 || minute < 0 || minute > 59) {
    alert("Enter a valid time!");
    return;
  }

  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  taskElement.innerHTML = `
                <div>
                    <strong>${task}</strong>
                    <div class="date-time">${date} - ${hour}:${minute} ${ampm}</div>
                </div>
                <i class="fas fa-trash delete"></i>
            `;

  taskList.appendChild(taskElement);

  // Clear Inputs
  taskInput.value = "";
  dateInput.value = "";
  hourInput.value = "";
  minuteInput.value = "";

  // Delete Task
  taskElement.querySelector(".delete").addEventListener("click", () => {
    taskElement.remove();
  });
});
