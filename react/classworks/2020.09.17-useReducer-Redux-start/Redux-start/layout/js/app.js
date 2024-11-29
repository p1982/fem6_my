const openModal = function() {
    const {target} = this.dataset;
    const modal = document.querySelector(target);
    modal.style.display = "block";
};

const closeModal = function() {
    const modal = this.closest(".modal");
    modal.style.display = "none";
};

const buttonsOPenModal = document.querySelectorAll(".open-modal-btn");
buttonsOPenModal.forEach(button => button.addEventListener("click", openModal));

const buttonsCloseModal = document.querySelectorAll(".close-modal-btn");
buttonsCloseModal.forEach(button => button.addEventListener("click", closeModal));