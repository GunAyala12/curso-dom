import checkComplete from "./companets/checkComplete.js";
import deleteIcon from "./companets/deleteIcon.js";

//Immediately invoked function expression IIFE
const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas generado con mayor o igual 
//listener saber cuando el usuario hace click 
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]")
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    //para las comilllias invertidas (backticks ``)
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    
    //task.innerHTML = content

    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
};

btn.addEventListener("click", createTask);

