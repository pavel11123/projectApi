const modal = document.querySelector(".modal-wrapper");

async function openModal() {
  // console.log(id);
  const cardFilm = document.querySelectorAll(".card__film");

  cardFilm.forEach((element) => {
    element.addEventListener("click", (e) => {
      modal.classList.add("modal-show");
      console.log(e.target.parentNode.parentNode.firstElementChild.value);
    });
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault;

    if (e.target === modal) {
      modal.classList.remove("modal-show");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("modal-show");
    }
  });
}
