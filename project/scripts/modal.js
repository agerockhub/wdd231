const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

// "show the dialog" button opens the dialog modally
openButton.addEventListener("click", () => {
    dialogBox.showModal();
})

// "Close button" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
})