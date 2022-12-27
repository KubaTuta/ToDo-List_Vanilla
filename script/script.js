const tasks = [];

const render = () => {
   let htmlString = "";

   const tasksElement = document.querySelector(".js-tasks");

   for (const task of tasks) {
      htmlString += `<li>${task.newTask}<button class="js-remove">usun</button></li>`
   }

   tasksElement.innerHTML = htmlString;

   const buttonRemove = document.querySelectorAll(".js-remove");
};

const addNewTask = (newTask) => {
   if (newTask === "") {
      return;
   }
   else {
      tasks.push({ newTask });

      render();
   }
};

const onFormSubmit = (event) => {
   event.preventDefault();

   const newTaskElement = document.querySelector(".js-newTask");

   const newTask = newTaskElement.value.trim();

   addNewTask(newTask);
};

const init = () => {
   render();

   const formElement = document.querySelector(".js-form");

   formElement.addEventListener("submit", onFormSubmit);
};

init();


