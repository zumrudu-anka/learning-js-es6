const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e) {
    console.log("Submit Event");
    e.preventDefault();// submit eventi default olarak tetiklendigi sayfayi render ediyor
    // veya form action ile belirtilen adrese yonlendiriyor..
    // eventlarin default hareketlerini kesmek icin bu fonksiyonu
    // kullaniyoruz..
}
// filterInput.onfocus = function(){
//     console.log("Naber");
// }

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
    console.log("Naber");
});