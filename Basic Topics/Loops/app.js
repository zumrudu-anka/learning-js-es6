// While Loops


let i = 1;

while (i<10){
    if(i == 5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

i = 10;

while(i>0){
    console.log(i);
    i--;
    if(i == 5)
    break;
}

// Do While Loops

do {
    console.log(i);
    i++;
} while (i<=10);

const langs= ["python","JS","Java"];

i = 0;

while(i < langs.length){
    console.log(langs[i]);
    i++;
}

// For Loops

for (let index = 0; index < langs.length; index++) {
    console.log(langs[index]);
}


// foreach Loops

langs.forEach(function(x){
    console.log(x);
});

langs.forEach(function(x,y){
    console.log(x,y );
    console.log(`elem: ${x} index : ${y}`);
});

const users = [
    {name: "Anka", age:15},
    {name: "Zumrud", age:25},
    {name: "phoenix", age:35},

]

const names = users.map(function(user){
    return user.name;
});

names.forEach(element => {
    console.log(element);
});

const ages = users.map(function(user){
    return user.age;
})

console.log(ages);

const user={
    name:"Osman",
    age:29
}

for (let i in user){
    console.log(i,user[i]);
    console.log(i);
    console.log(user[i]);
}