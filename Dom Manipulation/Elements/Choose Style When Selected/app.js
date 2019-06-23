const element=document.querySelector("#clear-todos");
console.log(element);
console.log(element.id);
console.log(element.className);
console.log(element.getAttribute("href"));
console.log(element.classList);
console.log(element.classList[0]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style);


//  Change Styles and Elements Features

element.className="btn btn-primary";
element.style.color="#000";
element.style.marginLeft="50px";
element.href="https://www.google.com.tr";
element.target = "_blank";  // if u want new tab use this attribute

element.textContent="Go to Google in New Tab";
console.log(element);

element.innerHTML = "<span style = 'color:black'>Delete</span>";

const elements = document.querySelectorAll("li");

elements.forEach(x => {
    //x.style.color="red";
    x.style="color:red;font-weight:bold";
    x.style.background = "#eee";
});

let element2 = document.querySelector("li:first-child");
console.log(element2);

element2=document.querySelector("li:last-child");
console.log(element2);

element2=document.querySelector("li:nth-child(2)");
console.log(element2);

element2=document.querySelector("li:nth-child(3)");
console.log(element2);

element2=document.querySelectorAll("li:nth-child(odd)");
console.log(element2);

element2.forEach(x => {
    x.style="color:red;background:#000";
});

element2=document.querySelectorAll("li:nth-child(even)");
console.log(element2);

element2.forEach(x => {
    x.style="color:blue;background:#eee";
});