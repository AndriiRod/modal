const refs = {
  openModalBtn: document.querySelector(`button[data-active="open"]`),
  closeModalBtn: document.querySelector(`button[data-active="close"]`),
  backdrop: document.querySelector(".js-backdrop"),
  inputName: document.querySelector(".js-form__input"),
  formSubmit: document.querySelector(".js-form-submit"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", toggleModalClickBackdrop);
refs.formSubmit.addEventListener("submit", formSubmit);

function smoothScroll() {
  refs.backdrop.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

function toggleModal() {
  document.body.classList.toggle("show-modal");
  if (
    window.matchMedia("(max-width: 768px)").matches &&
    document.body.classList.contains("show-modal")
  )
    smoothScroll();
  if (document.body.classList.contains("show-modal")) {
    window.addEventListener("keydown", onEscKeyPress);
  } else {
    window.removeEventListener("keydown", onEscKeyPress);
  }
}

function onEscKeyPress(event) {
  if (event.code === "Escape") toggleModal();
}

function toggleModalClickBackdrop(event) {
  if (event.currentTarget === event.target) toggleModal();
}

function formSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name}:${value}`);
  });
}
