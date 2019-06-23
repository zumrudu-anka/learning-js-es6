
//  Create new element

const newLink = document.createElement("a");
console.log(newLink);

const cardbody = document.getElementsByClassName("card-body")[1];
console.log(cardbody);

newLink.id = "clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";

//  Text Content
//newLink.textContent="Text icerigi"; // This use is not good and safety..
// if u used this attribute for setting textcontent, all child of this tag deleted..

//  sample..

//cardbody.textContent="Tum cocuklar silinip bu yazi yazildi textcontent ile yaptigimiz icin..";
//console.log(cardbody);


//  Text Node

//const text=document.createTextNode("Naber");
//cardbody.appendChild(text);

//const text = document.createTextNode("Google");
//newLink.append(text);

//cardbody.appendChild(newLink);

newLink.appendChild(document.createTextNode("Google"));
console.log(newLink);
cardbody.appendChild(newLink);