
function merhaba(name="Anka",age=0) {   // default param values
    console.log(`Name: ${name}\n Age: ${age}`);
}

//or

function merhaba2(name,age) {
     // set default param values like this
    if(typeof name === "undefined") name="Bilgi yok";
    if(typeof age === "undefined") age = "Bilgi yok";
    console.log(`Name: ${name}\n Age: ${age}`);
}

merhaba("Osman",29);

merhaba();

merhaba2("Mehmet");

merhaba2();


function square(x) {
    console.log(x*x);
    return x*x;
}

function cube(x){
    console.log(x*x*x);
    return x*x*x;
}

let num = square(12);

num = cube(num);

num = cube(square(12));

function merhaba3(){
    return "Merhaba";
}

console.log(merhaba3());

const merhaba4 = function () {
    console.log("Merhaba");
}

merhaba4();

const merhaba5 = function (name) {
    console.log(`Name: ${name}`);
}

merhaba5("Murat");

//  Immediately Invoked Function Expression(IIFE) // Tanimlandigi yerde calisan fonk

(function(name){
    console.log(`Name: ${name}`);
})("Murat");

const database = {
    host : "localhost",
    add : function(){
        console.log("Eklendi");
    },
    get : function () {
        console.log("Elde Edildi");
    },
    update : function(id){
        console.log(`Id: ${id} Guncellendi.`);
    },
    delete : function(id){
        console.log(`Id: ${id} Silindi.`);
    },
}

console.log(database.host);

database.add();
database.delete(13);