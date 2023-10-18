import { taskList } from "../constants.js";
import { updateStorage } from "../lib/localStorage.js";

export const createTask = (newInputText, x) => {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
    <div class="taskinfo">
        <input type="checkbox" name="" class="taskcheck">
        <span class="task">${newInputText}</span>
    </div>
    <img class="deletebtn" src="delete.png" alt="delete">
    `;
  taskList.append(newLi);
  const taskCheck = newLi.querySelector(".taskcheck");
  const taskDesc = newLi.querySelector(".task");
  if (x == -1) {
    taskDesc.style.textDecoration = "line-through";
    taskCheck.checked = true;
    if (x == -1) {
      updateStorage(newInputText, 1);
    }
  }
  taskCheck.addEventListener("change", (e) => {
    if (taskCheck.checked == true) {
      taskDesc.style.textDecoration = "line-through";
      if (x == 1) {
        updateStorage(newInputText, 1);
      }
    }
    if (taskCheck.checked == false) taskCheck.checked = true;
  });

  const deleteBtn = newLi.querySelector(".deletebtn");
  deleteBtn.addEventListener("click", (e) => {
    newLi.remove();
    updateStorage(newInputText, 0);
  });
};
