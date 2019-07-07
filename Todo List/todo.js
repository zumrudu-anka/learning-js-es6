// Choose all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearButtton = document.querySelector("#clear-todos");

document.addEventListener("DOMContentLoaded",eventListeners);

function eventListeners(){  // All Event Listeners
    form.addEventListener("submit",addTodo);

}

function addTodo(e){
    const newTodo = todoInput.value.trim();// Delete whitespace where the beginning or in the end of this string
    if(newTodo === ""){
        /*
        <hr>
        <div class="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
        </div>
        */
        //  warning,info is other showAlert types
        showAlert("danger","Lütfen bir todo girin...");
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Todo Başarıyla Eklendi...");
    }

    e.preventDefault();
}


function addTodoToUI(newTodo) {
    /*<li class="list-group-item d-flex justify-content-between">
        Todo 1
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>
    </li>*/
    // Create List Item
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    //listItem.textContent = newTodo;
    //  Create Link
    const link = document.createElement("a");
    link.href="#"
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // Add Text Node

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value="";
}

function showAlert(type,message) {
    const hr = document.createElement("hr");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(hr);
    firstCardBody.appendChild(alert);

    // setTimeout

    setTimeout(function name() {
        hr.remove();
        alert.remove();
    },1000);
}

function getTodosFromStorage(){
    let todos;
    if (localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}