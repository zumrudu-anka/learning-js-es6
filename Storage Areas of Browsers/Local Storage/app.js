//  Local Storage

//  SetItem

// localStorage.setItem("hareket","jump");
// localStorage.setItem("tekrar",50);
// Only saved String format in Local Storage
//  if u choose integer value then local storage will make convert to string this value
// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//  Clear Local Storage
//localStorage.clear();

// localStorage.setItem("sport","basketball");
// localStorage.setItem("sport2","football");

// if(localStorage.getItem("sport")===null){
//     console.log("Sorguladığınız veri bulunmuyor");
// }
// else{
//     console.log("Bulunuyor");
// }

// for (let index = 0; index < 2; index++) {
//     console.log(localStorage.getItem(localStorage.key(index)));
// }

//  Add Array in Local Storage

// const todos = ["Todo 1","Todo 2","Todo 3"];

//localStorage.setItem("todos",todos);    // This is not work
//  LocalStorage make to string this array elements and save them like sentence with comma

// console.log(localStorage.getItem("todos"));
// console.log(typeof localStorage.getItem("todos"));

//  This is perfect save like Array
//localStorage.setItem("todos",JSON.stringify(todos));

//  And this call return string value but we want array value
// const value = localStorage.getItem("todos");
// console.log(value);
// console.log(typeof value);

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);
// console.log(typeof value);

// value.forEach(element => {
//     console.log(element);
// });

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(params) {
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}