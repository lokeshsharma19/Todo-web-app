import { createTask } from "./createTask.js";

export const taskReloader = (e) => {
  const oldTasks = JSON.parse(localStorage.getItem("task")) || [];
  const oldCompletedTasks =
    JSON.parse(localStorage.getItem("completedTasks")) || [];
  for (let task of oldTasks) {
    createTask(task.taskText, 1);
  }
  for (let task of oldCompletedTasks) {
    createTask(task.taskText, -1);
  }
};
