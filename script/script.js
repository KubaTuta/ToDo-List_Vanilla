const tasks = [
   {
      content: "coś 1",
      done: false,
   },
   {
      content: "coś 2222222",
      done: true,
   },
];

const addNewTask = () => {
   const newTaskElement = document.querySelector(".js-newTask").value.trim();

   if (newTaskElement === "") {
      return;
   }
   else {
      tasks.push({
         content: newTaskElement,
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

const render = () => {
   let htmlString = "";
   const tasksElement = document.querySelector(".js-tasks");

   for (const task of tasks) {
      htmlString += `
      <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
      <button class="js-done">ptaszek</button>
      ${task.content}
      <button class="js-remove">usun</button>
      </li>
      `
   };

   tasksElement.innerHTML = htmlString;

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

const onFormSubmit = (event) => {
   event.preventDefault();

   addNewTask();
};

const init = () => {
   render();

   const formElement = document.querySelector(".js-form");
   formElement.addEventListener("submit", onFormSubmit)
};

init();


