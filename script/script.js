{
   let tasks = [];
   let hideDoneTasks = false;

   const addNewTask = (taskTrimmed) => {

      if (taskTrimmed !== "") {
         tasks = [
            ...tasks,
            {
               content: taskTrimmed,
            },
         ];

         render();
      }
      else return;
   };

   const removeTask = (taskIndex) => {
      tasks = [
         ...tasks.slice(0, taskIndex),
         ...tasks.slice(taskIndex + 1),
      ];
      render();
   };

   const toggleTaskDone = (taskIndex) => {
      tasks = [
         ...tasks.slice(0, taskIndex),
         {
            ...tasks[taskIndex],
            done: !tasks[taskIndex].done,
         },
         ...tasks.slice(taskIndex + 1),
      ];
      render();
   };

   const allTasksDone = () => {
      tasks = tasks.map((task) => ({
         ...task,
         done: true,
      }));

      render();
   };

   const toggleHideDoneTasks = () => {
      hideDoneTasks = !hideDoneTasks;
      render();
   };

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
   const bindButtonEvents = () => {
      const allDoneButtonsButton = document.querySelector(".js-allDoneButtonsButton");
      const toggleHideDoneTasksButton = document.querySelector(".js-toggleHideDoneTasksButton");

      if (allDoneButtonsButton) {
         allDoneButtonsButton.addEventListener("click", allTasksDone);
      }

      if (toggleHideDoneTasksButton) {
         toggleHideDoneTasksButton.addEventListener("click", toggleHideDoneTasks);
      }
   };

   const renderTasks = () => {
      const taskToHtml = task => `
      <li class="
      list__li${task.done && hideDoneTasks ? " list__li--hidden" : ""}">
      <button class="js-done list__birdie">
      ${task.done ? "???" : ""}
      </button>
      <span class="list__text${task.done ? " list__text--underlined" : ""}">
      ${task.content}
      </span>
      <button class="js-remove list__remove">
      ????
      </button>
      </li>
      `
      const tasksElement = document.querySelector(".js-tasks");
      tasksElement.innerHTML = tasks.map(taskToHtml).join("");
   };

   const renderButtons = () => {
      const buttonsElement = document.querySelector(".js-buttons");

      if (!tasks.length) {
         buttonsElement.innerHTML = "";
         return;
      }

      buttonsElement.innerHTML = `
      <button class="section__buttons js-toggleHideDoneTasksButton">
      ${hideDoneTasks ? "Poka??" : "Ukryj"} uko??czone
      </button>
      <button class="section__buttons js-allDoneButtonsButton"
      ${tasks.every(({ done }) => done) ? " disabled" : ""}>
      Uko??cz wszystkie
      </button>
      `
   };

   const render = () => {
      renderTasks();
      bindEvents();

      renderButtons();
      bindButtonEvents();
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
}