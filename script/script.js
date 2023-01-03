const tasks = [

];

const addNewTask = (taskTrimmed) => {


   if (taskTrimmed === "") {
      return;
   }
   else {
      tasks.push({
         content: taskTrimmed,
      });
      render();
   }
};

const removeTask = (taskIndex) => {
   tasks.splice(taskIndex, 1);
   render();
};

const toggleTaskDone = (taskIndex) => {
   tasks[taskIndex].done = !tasks[taskIndex].done;
   render();
}

const bindEvents = () => {
   const removeButtons = document.querySelectorAll(".js-remove");

   removeButtons.forEach((removeButton, taskIndex) => {
      removeButton.addEventListener("click", () => {
         removeTask(taskIndex);
      });
   });

   const toggleButtons = document.querySelectorAll(".js-done");

   toggleButtons.forEach((toggleButton, taskIndex) => {
      toggleButton.addEventListener("click", () => {
         toggleTaskDone(taskIndex);
      });
   });
};

const render = () => {
   let htmlString = "";
   const tasksElement = document.querySelector(".js-tasks");

   for (const task of tasks) {
      htmlString += `
      <li${task.done ? " style=\"text-decoration: line-through\"" : ""} class="list__li">
      <div><button class="js-done list__birdie">✔</button></div>
      <div class="list__text">${task.content}</div>
      <div><button class="js-remove list__remove">🗑</button></div>
      </li>
      `
   };

   tasksElement.innerHTML = htmlString;

   bindEvents();

};

const onFormSubmit = (event) => {
   event.preventDefault();
   const newTaskElement = document.querySelector(".js-newTask");
   const taskTrimmed = document.querySelector(".js-newTask").value.trim();

   if (taskTrimmed !== "") {
      addNewTask(taskTrimmed);
      newTaskElement.value = "";
   }
   newTaskElement.focus();
};

const init = () => {
   render();

   const formElement = document.querySelector(".js-form");
   formElement.addEventListener("submit", onFormSubmit)
};

init();


