const modal = document.querySelector(".modal-wrapper");

async function modalOpen() {
  const cardFilm = document.querySelectorAll(".card__film");

  cardFilm.forEach((element) => {
    element.addEventListener("click", () => {
      modal.classList.add("modal-show");
    });
  });
}
