
const todoinput=document.getElementById("todo");

let element;

element=todoinput;
console.log(element);

element = todoinput.classList;
console.log(element);

element = todoinput.classList.length;
console.log(element);

todoinput.classList.add("NewClass");
element=todoinput;
console.log(element);

todoinput.classList.add("NewClass2");
element=todoinput;
console.log(element);

todoinput.classList.remove("form-control");
element=todoinput;
console.log(element);

element = todoinput.placeholder;
console.log(element);

element=todoinput.getAttribute("placeholder");
console.log(element);

todoinput.setAttribute("placeholder","Naber");
element=todoinput;
console.log(element);

todoinput.setAttribute("title","Selam");
element=todoinput;
console.log(element);

element=todoinput.hasAttribute("name");
console.log(element);

element=todoinput.hasAttribute("required");
console.log(element);

todoinput.removeAttribute("name");
element=todoinput;
console.log(element);
