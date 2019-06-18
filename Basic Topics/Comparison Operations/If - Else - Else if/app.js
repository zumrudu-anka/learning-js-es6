/*

==
===
!=
!==
>
<
>=
<=

*/

console.log(2 == 2);
console.log(2 == "2");

console.log(2 === "2"); //value and type equality control

console.log(2 != 1);
console.log(2 != "2");
console.log(2 !== "2"); //value and type equality control

console.log(4>2 && "Anka" == "Anka");
console.log(4>2 || "Anka" == "Anka");

const error=false;

if(error==true){
    console.log("Hata Olustu");
}
else{
    console.log("Hata yok");
}

console.log("deneme");

const user = "abc";

if(user ==="anka"){
    console.log("Kullanici Bulundu");
}
else{
    console.log("Kullanici yok");
}

const process = 2;

if (process === 1){
    console.log("islem no 1");
}
else if(process === 2){
    console.log("islem no 2");
}
else{
    console.log("Gecersiz");
}

const number = 100;

if(number === 100){
    console.log("sayi 100 e esit");
}
else{
    console.log("sayi 100 e esit degil");
}

const number2=101;

if (number2 === 100) console.log("Sayi 100'e esit");
else console.log("sayi 100 e esit degil");