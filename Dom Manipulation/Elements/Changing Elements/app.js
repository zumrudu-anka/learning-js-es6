
//  REPLACE

const cardbody = document.querySelectorAll(".card-body")[1];
console.log(cardbody);

const newElement = document.createElement("h3");

newElement.className="card-title";
newElement.id = "tasks-title";
newElement.textContent="Yeni Todolar";

//  Old element

const oldElement=document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);