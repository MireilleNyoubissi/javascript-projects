// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


// select elements

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

//listen for click event on modal-btn

modalBtn.addEventListener("click", function() {
    modalOverlay.classList.add("open-modal");
});

//listen for click event on close-btn

closeBtn.addEventListener("click", function() {
    modalOverlay.classList.remove("open-modal");
})