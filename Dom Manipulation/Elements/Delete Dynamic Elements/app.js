
const todolist=document.querySelector("ul.list-group");
console.log(todolist);

const todos=document.querySelectorAll("li.list-group-item");
console.log(todos);

todos[0].remove();

todos[2].remove();

//  Remove Child;

todolist.removeChild(todolist.lastElementChild);

todolist.removeChild(todos[1]);