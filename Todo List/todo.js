// Choose all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const searchTodo = document.querySelector("#filter");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filterInput = document.querySelector("#filter");
const clearButtton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){  // All Event Listeners
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    searchTodo.addEventListener("keyup",filterTodos);
    clearButtton.addEventListener("click",clearTodos);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();// Delete whitespace where the beginning or in the end of this string
    let todos = getTodosFromStorage();
    if(todos.length!==0){
        let control = false;
        todos.forEach(element => {
            if(element.toLowerCase()===newTodo.toLowerCase()){
                control=true;
            }
        });
        if(control){
            showAlert("info","Eklemek İstediğiniz Todo Zaten Kayıtlı...");
        }
        else{
            if(newTodo === ""){
                /*
                <hr>
                <div class="alert alert-danger" role="alert">
                    <strong>Oh snap!</strong> Change a few things up and try submitting again.
                </div>
                */
                //  warning,info is other showAlert types
                showAlert("danger","Lütfen Bir Todo Giriniz...");
            }
            else{
                addTodoToUI(newTodo);
                addTodoToStorage(newTodo);
                showAlert("success","Todo Başarıyla Eklendi...");    
            }
        }
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

function loadAllTodosToUI(){
    let todos=getTodosFromStorage();
    todos.forEach(todo => {
        addTodoToUI(todo);
    });
}

function deleteTodo(e) {
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("info","Todo Başarıyla Silindi...");
    }
}

function deleteTodoFromStorage(deleteTodo){
    let todos=getTodosFromStorage();
    todos.forEach(function(todo,index) {
        if(todo===deleteTodo){
            todos.splice(index,1);
            //first parameter is from array index 
            //second parameter is delete item count
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function filterTodos(e){
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            //dont find
            listItem.setAttribute("style","display : none !important");
        }
        else{
            listItem.setAttribute("style","display : block");
        }
    });
}

function clearTodos() {
    if(confirm("Tümünü Silmek İstediğinize Emin Misiniz?")){
        //todoList.innerHTML="";  // This method works slowly
        
        // while(todoList.firstElementChild !== null){
        //     todoList.removeChild(todoList.firstElementChild);
        // }

        let todos=document.querySelectorAll(".list-group-item");
        todos.forEach(element => {
            element.remove();
        });
        localStorage.removeItem("todos");

        showAlert("warning","Tüm Todolar Silindi!!!");
    }
}