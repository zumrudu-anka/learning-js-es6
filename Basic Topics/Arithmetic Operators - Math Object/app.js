let value;

const value1 = 10;

const value2 = 4;

//  Arithmetic Operators
console.log("Sayi1: "+value1);
console.log("Sayi2: "+value2);
value = value1 + value2;
console.log("Toplam: " + value);
value = value1 - value2;
console.log("Fark: " + value);
value = value1 * value2;
console.log("Carpim: " + value);
value = value1 / value2;
console.log("Bolum: " + value);
value = value1 % value2;
console.log("Mod: " + value);

//  Math Object

value = Math.PI;
console.log("Pi Number: " + value);

value = Math.E;
console.log("Natural Log Coefficient: " + value);

value = 3.5;
console.log("Number for Round Function: ",value);
value = Math.round(value);
console.log("After Round Function: ",value);

value = 3.6;
console.log("Number for Round Function: ",value);
value = Math.round(value);
console.log("After Round Function: ",value);

value = 3.2;
console.log("Number for Round Function: ",value);
value = Math.round(value);
console.log("After Round Function: ",value);

value = 7.0000005;
console.log("Number for Ceil Function: ",value);
value = Math.ceil(value);
console.log("After Ceil Function: ",value);

value = 7.785;
console.log("Number for Ceil Function: ",value);
value = Math.ceil(value);
console.log("After Ceil Function: ",value);

value = 7.0000005;
console.log("Number for Floor Function: ",value);
value = Math.floor(value);
console.log("After Floor Function: ",value);

value = 7.9999999;
console.log("Number for Floor Function: ",value);
value = Math.floor(value);
console.log("After Floor Function: ",value);

value = 16;
console.log("Number for Sqrt Function: ",value);
value = Math.sqrt(value);
console.log("After Sqrt Function: ",value);

value = 39;
console.log("Number for Sqrt Function: ",value);
value = Math.sqrt(value);
console.log("After Sqrt Function: ",value);

value = -15;
console.log("Number for Abs Function: ",value);
value = Math.abs(value);
console.log("After Abs Function: ",value);

value = 3;
console.log("Numbers for Pow Function: ",value,value2);
value = Math.pow(value,value2);
console.log("After Pow Function: ",value);

value = 3;
console.log("Numbers for Max Function: ",value,value1,value2);
value = Math.max(value,value1,value2);
console.log("After Max Function: ",value);

value = 3;
console.log("Numbers for Min Function: ",value,value1,value2);
value = Math.min(value,value1,value2);
console.log("After Min Function: ",value);

value = Math.random();
console.log("Random Number: ",value);


value = Math.floor(Math.random() * 25 + 5);
console.log("Random Number Between 5 and 30: ",value);
