// Choose all elements
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const searchTodo = document.querySelector("#filter");
const todoList = document.querySelector(".list-group");
const completedTodoList = document.querySelector("#completedTodoList");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const completedBody = document.querySelector("#completedBody");
const filterInput = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
const clearCompletedTodosButton = document.querySelector("#clear-completed-todos");

eventListeners();

function eventListeners(){  // All Event Listeners
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",changeTodoStatus);
    completedBody.addEventListener("click",changeCompletedStatus);
    searchTodo.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearTodos);
    clearCompletedTodosButton.addEventListener("click", clearCompletedTodos);
}

function addTodo(e){
    const newTodo = todoInput.value.trim();// Delete whitespace where the beginning or in the end of this string
    console.log(newTodo);
    if(newTodo === ""){
        showAlert("danger","Lütfen Görev Adı Giriniz...");
    }
    else{
        let todos = getTodosFromStorage();

        if(todos.length!==0){
            let control = false;
            todos.forEach(element => {
                if(element.toLowerCase()===newTodo.toLowerCase()){
                    control=true;
                }
            });
            if(control){
                showAlert("info","Eklemek İstediğiniz Görev Zaten Kayıtlı...");
            }
            else{
                addTodoToUI(newTodo);
                addTodoToStorage(newTodo);
                showAlert("success","Görev Başarıyla Eklendi...");    
            }
        }
        else{
            addTodoToUI(newTodo);
            addTodoToStorage(newTodo);
            showAlert("success","Görev Başarıyla Eklendi...");
        }
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
    listItem.className = "list-group-item d-flex justify-content-between mt-3 w-50 text-white font-weight-bold pl-4";
    listItem.style = "background-color : #084852!important";
    //listItem.textContent = newTodo;
    //  Create Link
    const link = document.createElement("a");
    link.href="#"
    link.className = "delete-item";
    link.innerHTML = `
        <i class = 'fa fa-check font-weight-bold mr-2' style = 'color : #0bb900'></i>
        <i class = 'fa fa-trash-o font-weight-bold' style = 'color : #dc3545'></i>
    `;

    // Add Text Node
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value="";
}

function showAlert(type, message) {
    const hr = document.createElement("hr");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(hr);
    firstCardBody.appendChild(alert);

    // setTimeout

    setTimeout(function name() {
        hr.remove();
        alert.remove();
    }, 1000);
}

function showCompletedAlert(type, message) {
    const hr = document.createElement("hr");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    completedBody.appendChild(hr);
    completedBody.appendChild(alert);

    // setTimeout

    setTimeout(function name() {
        hr.remove();
        alert.remove();
    }, 1000);
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

    let completedTodos = getCompletedTodosFromStorage();
    completedTodos.forEach(completedTodo => {
        addCompletedTodoToUI(completedTodo);
    });
}

function getCompletedTodosFromStorage(){
    let completedTodos;
    if(localStorage.getItem("completedTodos") === null){
        completedTodos = [];
    }
    else{
        completedTodos = JSON.parse(localStorage.getItem("completedTodos"));
    }
    return completedTodos;
}

function addCompletedTodoToStorage(completedTodo){
    let completedTodos = getCompletedTodosFromStorage();
    if(!completedTodos.includes(completedTodo)){
        completedTodos.push(completedTodo);
        localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
        addCompletedTodoToUI(completedTodo);
    }
    
}

function addCompletedTodoToUI(completedTodo){
    
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between mt-3 w-50 text-white font-weight-bold pl-4";
    listItem.style = "background-color : #084852!important";
    //listItem.textContent = newTodo;
    //  Create Link

    // Add Text Node
    const link = document.createElement("a");
    link.href="#"
    link.className = "delete-item";
    link.innerHTML = `
        <i class = 'fa fa-trash-o font-weight-bold' style = 'color : #dc3545'></i>
    `;

    // Add Text Node

    listItem.appendChild(document.createTextNode(completedTodo));
    listItem.appendChild(link);
    completedTodoList.appendChild(listItem);
}

function changeTodoStatus(e) {
    if(e.target.className.includes("fa fa-trash-o")){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());
        showAlert("info", "Görev Başarıyla Silindi...");
    }
    else if(e.target.className.includes("fa fa-check")){
        e.target.parentElement.parentElement.remove();
        let completedTodo = e.target.parentElement.parentElement.textContent.trim();
        deleteTodoFromStorage(completedTodo);
        addCompletedTodoToStorage(completedTodo);
        showAlert("info", "Görev Başarıyla Tamamlandı...");
    }
}

function changeCompletedStatus(e){
    if(e.target.className.includes("fa fa-trash-o")){
        e.target.parentElement.parentElement.remove();
        deleteCompletedTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());
        showCompletedAlert("info", "Tamamlanan Görev Başarıyla Silindi...");
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

function deleteCompletedTodoFromStorage(deletedTodo){
    let completedTodos = getCompletedTodosFromStorage();
    completedTodos.forEach(function(ctodo, index) {
        if(ctodo === deletedTodo){
            completedTodos.splice(index, 1);
            //first parameter is from array index 
            //second parameter is delete item count
        }
    });
    localStorage.setItem("completedTodos",JSON.stringify(completedTodos));
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

        let todos=document.querySelectorAll("#todoList .list-group-item");
        todos.forEach(element => {
            element.remove();
        });
        localStorage.removeItem("todos");

        showAlert("warning", "Yapılacaklar Listesi Temizlendi!!!");
    }
}

function clearCompletedTodos(){
    if(confirm("Tamamlanan Görev Listesini Silmek İstediğinize Emin Misiniz?")){
        let completedTodos = document.querySelectorAll("#completedTodoList .list-group-item");
        completedTodos.forEach(completedTodo => {
            completedTodo.remove();
        });
        localStorage.removeItem("completedTodos");

        showCompletedAlert("warning", "Tamamlanan Görevler Temizlendi!!!");
    }
}