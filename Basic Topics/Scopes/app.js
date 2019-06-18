// Scopes

// Global Scope

// var value1=10;
// let value2=20;
// const value3=30;

// console.log(value1,value2,value3);

// function myfunc(){
//     var value1=40;
//     let value2=50;
//     const value3=60;
//     console.log(value1,value2,value3);
// }

// myfunc();
// console.log(value1,value2,value3);

// variables is special in functions. if you declare a variable
// in global scope and use in function or again declare in function
// this is no problem. But when if u declare a const variable in
// global scope and u want change value in this variable this is problem


var value1=10;
let value2=20;
const value3=30;

if (true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;
    console.log(value1,value2,value3);
}
console.log(value1,value2,value3);



if(true){
    var a=15;
    let b=25;
    const c=35;
    console.log(a,b,c);
}

console.log(a,b,c); // this is problem because b and c defined in
//  if block by let and const. let and const variables only use where defined blocks.
// But variable which named a usable in this log function.(var)

