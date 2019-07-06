const filter = document.querySelector("#filter");

//  This Event Wake Up When Html Page is Loaded.
// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Sayfa yuklendi");
// }

//  Focus

filter.addEventListener("focus",FocusRun);

function FocusRun(e) {
    console.log(e.type);
}

// Blur
//  This event wake when you leave focused tag
filter.addEventListener("blur",BlurRun);

function BlurRun(e) {
    console.log(e.type);
}

//  Paste

//  This event wake when you paste that your copied thing on this tag
//  Or you press ctrl+v or mouserightclick and choose paste.
filter.addEventListener("paste",PasteRun);

function PasteRun(params) {
    console.log(params.type);
}

//  Copy

//  This event wake up when you press ctrl+c or choose copy
filter.addEventListener("copy",CopyRun);

function CopyRun(params) {
    console.log(params.type);
}

//  Cut

//  This event wake up when you press ctrl+x or choose cut
filter.addEventListener("cut",CutRun);

function CutRun(params) {
    console.log(params.type);
}

//  Select

filter.addEventListener("select",SelectRun);

function SelectRun(params) {
    console.log(params.type);
}