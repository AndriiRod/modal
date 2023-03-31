const refs = {
  openModalBtn: document.querySelector(`button[data-active="open"]`),
  closeModalBtn: document.querySelector(`button[data-active="close"]`),
  backdrop: document.querySelector(".js-backdrop"),
  inputName: document.querySelector(".js-form__input"),
};

function toggleModal() {
  document.body.classList.toggle("show-modal");
  refs.inputName.focus();
}

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
