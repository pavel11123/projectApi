const modal = document.querySelector(".modal-wrapper");

async function openModal() {
  const cardFilm = document.querySelectorAll(".card__film");

  cardFilm.forEach((element) => {
    element.addEventListener("click", () => {
      modal.classList.add("modal-show");
    });
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault;

    if (e.target === modal) {
      modal.classList.remove("modal-show");
    }
  });
}
