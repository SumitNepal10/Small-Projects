document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add");
  const taskValue = document.getElementById("task");
  const alltask = document.getElementById("allTask");

  // Initialize the tasks array
  let tasks = [];

  // Retrieve tasks from local storage if they exist
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
      tasks = JSON.parse(storedTasks);
  }

  // function to add task in local storage
  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // function to display the task
  function displayTasks() {
      alltask.innerHTML = "";

      tasks.forEach((task, index) => {
          const li = document.createElement("li");
          li.innerHTML = `
              <div class="${task.completed ? "completed" : ""}">
                  <span class="task-text">${task.name}</span>
                  <button class="complete">Complete</button>
                  <button class="delete">Remove</button>
              </div>`;
          
          li.querySelector(".delete").addEventListener("click", () => {
              tasks.splice(index, 1);
              saveTasks();
              displayTasks();
          });

          li.querySelector(".complete").addEventListener("click", () => {
              task.completed = !task.completed;
              saveTasks();
              displayTasks();
          });

          alltask.appendChild(li);
      });
  }

  // function to get and save the task
  addBtn.addEventListener("click", () => {
      const taskName = taskValue.value.trim();

      if (taskName === "") {
          // if task is empty throw alert
          window.alert("Task cannot be empty");
      } else {
          // else add the task in the local storage
          const newTask = { name: taskName, completed: false };
          tasks.push(newTask); // push the new task to array
          saveTasks();
          displayTasks();
          taskValue.value = ""; // clear the input field
      }
  });

  // Initial display of tasks
  displayTasks();
});
