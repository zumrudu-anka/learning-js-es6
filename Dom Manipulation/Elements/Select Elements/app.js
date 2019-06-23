let element;

element=document.getElementById("todo-form");
console.log(element);

element=document.getElementById("tasks-title");
console.log(element);

element = document.getElementsByClassName("list-group-item");
console.log(typeof element);

for (let i = 0; i < element.length; i++) {
    console.log(element[i]);
}

console.log(element[0]);

element = document.getElementsByTagName("div");
console.log(element);

for (let i = 0; i < element.length; i++) {
    console.log(element[i]);
}


//  Query Selector - Css Selector - Only returned one element

element=document.querySelector("#todo-form");
console.log(element);

element=document.querySelector("#tasks-title");
console.log(element);

element=document.querySelector(".list-group-item");
console.log(element);

element=document.querySelector("li");
console.log(element);

element=document.querySelector("div");
console.log(element);

//  if u want select all elements with query selector

//  U can use QuerySelectorAll

// if u use queryselectorall u can use foreach loop
// but if u use getelementsbyclassname u cant use foreach

element = document.querySelectorAll(".list-group-item");
console.log(element);

element.forEach(element => {
    console.log(element);
});

