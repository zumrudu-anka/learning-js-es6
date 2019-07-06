// Keyboard Events

// document.addEventListener("keypress",keypressrun);

// KeyPress // Only catch on digits and alphabetic characters

// function keypressrun(e){
//     console.log(e.which);// Show ASCII value that of pressed key
//     console.log(e.key);// Show value which of pressed key
//     console.log("Naber");
// }

// KeyDown  // Catch every key on keyboard

// document.addEventListener("keydown",keydownrun);

// function keydownrun(e) {
//     console.log(e.which);
//     console.log(e.key);
//     console.log("Merhaba");
// }

// KeyUp   // Catch every key on keyboard

// document.addEventListener("keyup",keyuprun);

// function keyuprun(e) {
//     console.log(e.which);
//     console.log(e.key);
//     console.log("Welcome")
// }

const TodoListHeader = document.querySelector(".card-header");
const TodoInput = document.querySelector("#todo");


// TodoInput.addEventListener("focus",function() {
//     let count=0;
//     document.addEventListener("keypress",function(e) {
//         if(count===0){
//             TodoListHeader.textContent = "";
//         }
//         count++;
//         TodoListHeader.textContent += e.key;
//     })

// });


TodoInput.addEventListener("keyup",changeText);

function changeText(e) {
    TodoListHeader.textContent = e.target.value;
}