// import { completedTasks, allTaskDesc } from "../constants.js";
// add to storage

export const storeTask = function (taskObj) {
  const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
  oldTasks.push(taskObj);
  localStorage.setItem("task", JSON.stringify(oldTasks));
};

// update to storage
export const updateStorage = function (newInputText, f) {
  const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
  const oldCompletedTasks =
    JSON.parse(localStorage.getItem("completedTasks")) || [];
  let taskCount = 0;
  let deletedObj;
  if (f == 1) {
    oldTasks.forEach((task) => {
      if (task.taskText == newInputText) {
        oldTasks[taskCount].status = 0;
        deletedObj = oldTasks[taskCount];
        oldTasks.splice(taskCount, 1);
        oldCompletedTasks.push(deletedObj);
      }
      taskCount++;
    });
  } else if (f == 0) {
    oldCompletedTasks.forEach((task, index) => {
      if (task.taskText == newInputText) {
        oldCompletedTasks.splice(index, 1);
      }
    });
  }
  localStorage.setItem("task", JSON.stringify(oldTasks));
  localStorage.setItem("completedTasks", JSON.stringify(oldCompletedTasks));
};
// delete from storage

// fetch from storage
