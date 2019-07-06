const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// Click Event

// title.addEventListener("click",ClickRun);

// function ClickRun(e) {
//     console.log(e.type);
// }

// Double Click Event

// title.addEventListener("dblclick",DoubleClickRun);

// function DoubleClickRun(e){
//     console.log(e.type);
// }

// MouseDown Event

// title.addEventListener("mousedown",MouseDownRun);

// function MouseDownRun(e) {
//     console.log(e.type);
// }

//  MouseUp Event

// title.addEventListener("mouseup",MouseUpRun);

// function MouseUpRun(e) {
//     console.log(e.type);
// }

//  MouseOver Event

// title.addEventListener("mouseover",MouseOverRun);

// function MouseOverRun(e) {
//     console.log(e.type);
// }

//  MouseOut Event

// title.addEventListener("mouseout",MouseOutRun);

// function MouseOutRun(e) {
//     console.log(e.type);
// }

// if u use mouseover or mouseout events on parent tags
// this events also works on child tags
//cardBody.addEventListener("mouseover",MouseOverRun);
//cardBody.addEventListener("mouseout",MouseOutRun);

//  MouseEnter and MouseLeave

cardBody.addEventListener("mouseenter",MouseEnterRun);
cardBody.addEventListener("mouseleave",MouseLeaveRun);

function MouseEnterRun(e) {
    console.log(e.type);
}
function MouseLeaveRun(e) {
    console.log(e.type);
}

