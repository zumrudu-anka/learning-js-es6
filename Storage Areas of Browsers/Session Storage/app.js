// Session Storage

// Key and Value


//  Choose Button
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

//  Choose Inputs

const addkeyInput = document.querySelector("#addkey");
const addvalueInput = document.querySelector("#addvalue");
const deletekeyInput = document.querySelector("#deletekey");

addButton.addEventListener("click",addItem);
deleteButton.addEventListener("click",deleteItem);
clearButton.addEventListener("click",clearItem);

function addItem() {
    sessionStorage.setItem(addkeyInput.value,addvalueInput.value);
}

function deleteItem() {
    sessionStorage.removeItem(deletekeyInput.value);
    
}

function clearItem() {
    sessionStorage.clear();
}