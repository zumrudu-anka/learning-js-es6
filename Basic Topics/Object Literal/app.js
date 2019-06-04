let value;

const programmer = {
    name : "Zümrüd-ü Anka",
    age : 29,
    email : "zumrudu-anka.github.io",
    languages : ["C++","Python","Java","Javascript"],
    adress : {
        country : "Türkiye",
        city : "Erzurum",
        secondcity : "Trabzon"
    },
    work : function(){
        console.log("Working Now...");
    }
}

value = programmer;
console.log(value);

value = programmer.name;
console.log(value);

value = programmer.age;
console.log(value);

value = programmer.email;   // This is good then after way
console.log(value);

value = programmer["email"];
console.log(value);

value = programmer.languages;
console.log(value);

value = programmer.adress.city;
console.log(value);

programmer.work();


const programmers = [
    {name : "Osman", age: 29},
    {name : "Ali", age:22}
];

value = programmers[0].name;
console.log(value);

