const modalOpenButtons = document.querySelectorAll(".btn-modal");
modalOpenButtons.forEach(button => button.addEventListener("click", openModal));

const modalCloseButtons = document.querySelectorAll(".modal-close");
modalCloseButtons.forEach(button => button.addEventListener("click", closeModal));

function openModal(){
    const {target} = this.dataset;
    console.log(target)
    const modal = document.querySelector(target);
    modal.classList.add("open");
}
//
function closeModal() {
    const modal = this.closest(".modal");
    modal.classList.remove("open")
    }