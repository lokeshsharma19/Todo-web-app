import { taskForm, newInput } from "./utils/constants.js";

import { storeTask } from "./utils/lib/localStorage.js";
import { createTask } from "./utils/helper/createTask.js";
import { taskObj } from "./utils/constants.js";

import { tabs } from "./utils/constants.js";
import { tabManagement } from "./utils/helper/tabManagement.js";
import { taskReloader } from "./utils/helper/taskReloader.js";
// const taskForm = document.querySelector(".taskform");
// const newInput = document.querySelector(".taskdesc");
// const taskList = document.querySelector(".tasklist");
// const allTaskDesc = [];
// const completedTasks = [];

// loading-retrieving
document.addEventListener("DOMContentLoaded", (e) => {
  taskReloader(e);
});
// const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
// const oldCompletedTasks =
//   JSON.parse(localStorage.getItem("completedTasks")) || [];
// for (let task of oldTasks) {
//   createTask(task.taskText, 1);
// }
// for (let task of oldCompletedTasks) {
//   createTask(task.taskText, -1);
// }

// const storeTask = function (taskObj) {
//   const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
//   oldTasks.push(taskObj);
//   localStorage.setItem("task", JSON.stringify(oldTasks));
// };

//
// const updateStorage = function (newInputText, f) {
//   const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
//   const oldCompletedTasks =
//     JSON.parse(localStorage.getItem("completedTasks")) || [];
//   let j = 0;
//   if (f == 1) {
//     oldTasks.forEach((task) => {
//       if (task.taskText == newInputText) {
//         oldTasks[j].status = 0;
//         deletedObj = oldTasks[j];
//         oldTasks.splice(j, 1);
//         oldCompletedTasks.push(deletedObj);
//       }
//       j++;
//     });
//   } else if (f == 0) {
//     console.log("hello");
//     oldCompletedTasks.forEach((task, index) => {
//       if (task.taskText == newInputText) {
//         oldCompletedTasks.splice(index, 1);
//       }
//     });
//   }
//   localStorage.setItem("task", JSON.stringify(oldTasks));
//   localStorage.setItem("completedTasks", JSON.stringify(oldCompletedTasks));
// };

// // tabs management

// const tabs = document.querySelector(".tabs");
// tabs.addEventListener("click", (e) => {
//   if (e.target.classList.contains("tab")) {
//     const rectangles = tabs.querySelectorAll(".rectangle");
//     for (const rect of rectangles) {
//       rect.style.backgroundColor = "white";
//     }
//     e.target.firstElementChild.style.background = "#2F80ED";
//   }
//   if (e.target.classList.contains("all")) {
//     const deleteBtns = document.getElementsByClassName("deletebtn");
//     for (let deleteBtn of deleteBtns) {
//       deleteBtn.style.display = "none";
//     }
//     const taskInput = document.querySelector(".taskform");
//     taskInput.style.display = "block";
//     const taskLis = document.querySelectorAll("li");
//     taskLis.forEach((ele) => {
//       ele.style.display = "inline";
//     });
//   }
//   if (e.target.classList.contains("active")) {
//     const deleteBtns = document.getElementsByClassName("deletebtn");
//     for (let deleteBtn of deleteBtns) {
//       deleteBtn.style.display = "none";
//     }
//     const taskInput = document.querySelector(".taskform");
//     taskInput.style.display = "block";
//     const taskLis = document.querySelectorAll("li");
//     taskLis.forEach((ele) => {
//       if (ele.querySelector("input").checked == true) {
//         ele.style.display = "none";
//       } else {
//         ele.style.display = "inline";
//       }
//     });
//   }
//   if (e.target.classList.contains("completed")) {
//     const deleteBtns = document.getElementsByClassName("deletebtn");
//     for (let deleteBtn of deleteBtns) {
//       deleteBtn.style.display = "unset";
//     }
//     const taskInput = document.querySelector(".taskform");
//     taskInput.style.display = "none";
//     const taskLis = document.querySelectorAll("li");
//     taskLis.forEach((ele) => {
//       if (ele.querySelector("input").checked == false) {
//         ele.style.display = "none";
//       } else {
//         ele.style.display = "flex";
//       }
//     });
//   }
// });

// const createTask = (newInputText, x) => {
//   const newLi = document.createElement("li");
//   newLi.innerHTML = `
//     <div class="taskinfo">
//         <input type="checkbox" name="" class="taskcheck">
//         <span class="task">${newInputText}</span>
//     </div>
//     <img class="deletebtn" src="delete.png" alt="delete">
//     `;
//   taskList.append(newLi);
//   const taskCheck = newLi.querySelector(".taskcheck");
//   const taskDesc = newLi.querySelector(".task");
//   if (x == -1) {
//     taskDesc.style.textDecoration = "line-through";
//     taskCheck.checked = true;
//     if (x == -1) {
//       updateStorage(newInputText, 1);
//     }
//   }
//   taskCheck.addEventListener("change", (e) => {
//     if (taskCheck.checked == true) {
//       taskDesc.style.textDecoration = "line-through";
//       if (x == 1) {
//         updateStorage(newInputText, 1);
//       }
//     }
//     if (taskCheck.checked == false) taskCheck.checked = true;
//   });

//   const deleteBtn = newLi.querySelector(".deletebtn");
//   deleteBtn.addEventListener("click", (e) => {
//     newLi.remove();
//     updateStorage(newInputText, 0);
//   });
// };

tabs.addEventListener("click", (e) => {
  tabManagement(e);
});
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (newInput.value == "") {
    alert("Enter Something");
    return false;
  }
  createTask(newInput.value, 1);
  taskObj.taskText = newInput.value;
  storeTask(taskObj);
  newInput.value = "";
});

// taskForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
// taskList.innerHTML=`
// <li>
// <div class="taskinfo">
//     <input type="checkbox" name="" class="taskcheck">
//     <span class="task">${newInput.textContent}</span>
// </div>
// <img class="deletebtn" src="delete.png" alt="delete">
// </li>
// `
// })
