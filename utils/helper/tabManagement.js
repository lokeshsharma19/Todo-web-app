// tabs management
import { tabs } from "../constants.js";

export const tabManagement = (e) => {
  if (e.target.classList.contains("tab")) {
    const rectangles = tabs.querySelectorAll(".rectangle");
    for (const rect of rectangles) {
      rect.style.backgroundColor = "white";
    }
    e.target.firstElementChild.style.background = "#2F80ED";
  }
  if (e.target.classList.contains("all")) {
    const deleteBtns = document.getElementsByClassName("deletebtn");
    for (let deleteBtn of deleteBtns) {
      deleteBtn.style.display = "none";
    }
    const taskInput = document.querySelector(".taskform");
    taskInput.style.display = "block";
    const taskLis = document.querySelectorAll("li");
    taskLis.forEach((ele) => {
      ele.style.display = "inline";
    });
  }
  if (e.target.classList.contains("active")) {
    const deleteBtns = document.getElementsByClassName("deletebtn");
    for (let deleteBtn of deleteBtns) {
      deleteBtn.style.display = "none";
    }
    const taskInput = document.querySelector(".taskform");
    taskInput.style.display = "block";
    const taskLis = document.querySelectorAll("li");
    taskLis.forEach((ele) => {
      if (ele.querySelector("input").checked == true) {
        ele.style.display = "none";
      } else {
        ele.style.display = "inline";
      }
    });
  }
  if (e.target.classList.contains("completed")) {
    const deleteBtns = document.getElementsByClassName("deletebtn");
    for (let deleteBtn of deleteBtns) {
      deleteBtn.style.display = "unset";
    }
    const taskInput = document.querySelector(".taskform");
    taskInput.style.display = "none";
    const taskLis = document.querySelectorAll("li");
    taskLis.forEach((ele) => {
      if (ele.querySelector("input").checked == false) {
        ele.style.display = "none";
      } else {
        ele.style.display = "flex";
      }
    });
  }
};
