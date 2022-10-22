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
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content

    list.appendChild(task);

    console.log(content);
}

console.log(btn);

btn.addEventListener("click", createTask);



