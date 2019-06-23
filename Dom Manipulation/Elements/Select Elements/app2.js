
let value;

const todolist = document.querySelector(".list-group");
console.log(todolist);
const todo = document.querySelector(".list-group-item:nth-child(2)");
console.log(todo);
const cardrow = document.querySelector(".card.row");// this tag classname is card and row

console.log(value);

// Child Nodes  -   contain text

value = todolist.childNodes;    // This use will return white space character which endline
console.log(value);

value = todolist.childNodes[0];
console.log(value);

//  Children    -   contains only elements

value = todolist.children;
console.log(value);

value = todolist.children[2];
console.log(value);

value = todolist.children[todolist.children.length-1];
console.log(value);

value = todolist.children[1].textContent="Degisti";
console.log(value);

value = cardrow.children;
value = cardrow.children[2].children[1].textContent="Burasi da Degisti";
console.log(value);

value = todolist;
console.log(value);

value = todolist.children[0];
console.log(value);

value = todolist.firstElementChild;
console.log(value);

value = todolist.lastElementChild;
console.log(value);

value = todolist.children.length;
console.log(value);

value = todolist.childElementCount;
console.log(value);

value = cardrow;
console.log(value);

value = cardrow.parentElement;
console.log(value);

value = cardrow.parentElement.parentElement;
console.log(value);

value = todo;
console.log(value);

value = todo.parentElement.previousElementSibling;
console.log(value);

value = todo.nextElementSibling;
console.log(value);

value = todo.nextElementSibling.nextElementSibling;
console.log(value);

value = todo.previousElementSibling.previousElementSibling;
console.log(value);
