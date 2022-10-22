const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anonimas generado con mayor o igual 
//listener saber cuando el usuario hace click 
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

console.log(btn);

btn.addEventListener("click", createTask);




