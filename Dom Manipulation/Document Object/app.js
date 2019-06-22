
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

