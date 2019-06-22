
console.log(this.document);
console.log(document);

let value;

value = document;
value = document.all;
console.log(value);

value = document.all.length;
console.log(value);

value = document.all[0];
console.log(value);

value = document.all[6];
console.log(value);

value = document.all[document.all.length-1];
console.log(value);

const elements = document.all;
for(let i = 0; i < elements.length; i++){
    console.log(elements[i]);
}

console.log(typeof elements);

// elements.forEach(element => {
//     console.log(element);
// });  foreach cant usable now because elements is not array
// if u want use foreach u must be conversion this variable to array..

const collections=Array.from(elements); // or const collections = Array.from(document.all);

console.log(typeof collections);    // and now this variable type is object

collections.forEach(collection => {
    console.log(collection)
});

value = document.all[6];    // body ticket
console.log(value);

value = document.body;
console.log(value);

value = document.head;
console.log(value);

value = document.location;
console.log(value);

value = document.location.hostname;
console.log(value);

value = document.location.port;
console.log(value);

value = document.URL;
console.log(value);

value = document.characterSet;
console.log(value);

value = document.scripts;
console.log(value);

value = document.scripts[0];
console.log(value);

value = document.scripts.length;
console.log(value);

value = document.links;
console.log(value);

value = document.links[0];
console.log(value);

value = document.links[document.links.length-1];
console.log(value);

value = document.links[document.links.length-1].getAttribute("class");
console.log(value);

value = document.links[document.links.length-1].className;
console.log(value);

value = document.links[document.links.length-1].classList;
console.log(value); // show all class

value = document.links[document.links.length-1].getAttribute("href");
console.log(value);

value = document.forms;
console.log(value);

value = document.forms.length;
console.log(value);

value = document.forms[0];
console.log(value);

value = document.forms["form"];//   if this tag has name attribute and this attribute if equal "form" u can get like this
console.log(value);

value = document.forms[0].id;
console.log(value);

value = document.forms[0].getAttribute("id");
console.log(value);

value = document.forms[0].getAttribute("name");
console.log(value);

value = document.forms[0].name;
console.log(value);

value = document.forms[0].method;   // if u not set method attribute for form tag, it is setted default value as get
console.log(value);
