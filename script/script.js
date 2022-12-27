const tasks = [];

const removeTask = (index) => {
   tasks.splice(index, 1);
   render();
};

const render = () => {
   let htmlString = "";
   const tasksElement = document.querySelector(".js-tasks");

   for (const task of tasks) {
      htmlString += `<li>${task.newTask}<button class="js-remove">usun</button></li>`
   }

   tasksElement.innerHTML = htmlString;

   const removeButtons = document.querySelectorAll(".js-remove");

   removeButtons.forEach((dowolnaZmienna, index) => {
      dowolnaZmienna.addEventListener("click", () => {
         removeTask(index);
      });
   });
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


