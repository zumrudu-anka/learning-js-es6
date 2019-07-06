// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(params) {
//     console.log("Container"); 
// });

// document.querySelector(".card.row").addEventListener("click",function(params) {
//     console.log("Card Row"); 
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(params) {
//     console.log("Card Body"); 
// });

// Event Capturing or Delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    else if(e.target.id === "filter"){
        console.log("Filtreleme İşlemi");
    }
    else if(e.target.id === "clear-todos"){
        console.log("Temizleme İşlemi");
    }
}