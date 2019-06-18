
//console.log(this);      // same
//console.log(window);    // same

// this.alert("hi");
// window.alert("haci");

// alert("Merhaba");


//      CONFIRM FUNC


// const cevap = confirm("Emin misiniz?");

// console.log(cevap);

// if(cevap){
//     console.log("Onayladiniz");
// }
// else
// console.log("onaylamadin");

// if(confirm("Emin misiniz?"))
// console.log("Onayladiniz");
// else
// console.log("Onaylamadiniz");


//      PROMPT FUNC

// const cevap = prompt("2 + 2 = ?");

// console.log(cevap);

// if(Number(cevap)===4)
// console.log("Dogru cevap");
// else
// console.log("Saka mi yapion?");


let value;
value = window;
console.log(value);
value = window.location;
console.log(value);

value = window.location.host;
console.log(value);

value = window.location.hostname;
console.log(value);

value = window.location.port;
console.log(value);

value = window.location.href;
console.log(value);

// Reload Function if you are not control this function
// Your page repeatedly and infitinitely reloading itself
// if(confirm("Sayfa Yenilensin mi?")){
//     window.location.reload();
// }
// else{
//     console.log("sayfa yenilenmedi");
// }


value = window.outerHeight;
console.log(value);

value = window.outerWidth;
console.log(value);

value = window.innerHeight;
console.log(value);

value = window.innerWidth;
console.log(value);

value = window.scrollX;
console.log(value);

value = window.scrollY;
console.log(value);