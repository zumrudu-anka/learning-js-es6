let value;


// Convert to String
value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () {
    console.log()
})
value = String([1,2,3,4]);
value = (10).toString();
value = (3.14).toString();


// Convert to Number

value = Number("123");
value = Number(null);
value = Number(undefined);
value = Number("Hello World");
value = Number(undefined);
value = Number(function () {
    console.log()
});
value = Number([1,2,3,4]);
value = Number("3.14");

value = parseFloat("3.14");
value = parseInt("3");


const a = "Hello" + 34; // Otomatik olarak tamami stringe cevrilir...

console.log(a);
console.log(typeof a);

const b = "34" + 59;

console.log(b);
console.log(typeof b);

const c= Number("343") + 72;

console.log(c);
console.log(typeof c);


console.log(value);
console.log(typeof value);
