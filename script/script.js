const formElement = document.querySelector(".js-form");
const newTaskElement = document.querySelector(".js-newTask");
const tasksElement = document.querySelector(".js-tasks");
const tasks = [];

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = newTaskElement.value.trim();

  if (newTask === "") {
    return;
  }
  else {
    tasks.push({ newTask });
  }

  let htmlString = "";

  for (const task of tasks) {
    htmlString += `<li>${task.newTask}</li>`
  }

  tasksElement.innerHTML = htmlString;

});



