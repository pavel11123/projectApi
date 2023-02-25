const modal = document.querySelector(".modal-wrapper");

async function openModal() {
  // console.log(id);
  const cardFilm = document.querySelectorAll(".card__film");
  let modalName;

  cardFilm.forEach((element) => {
    element.addEventListener("click", (e) => {
      modal.classList.add("modal-show");
      document.querySelector("#phone__menu-id-body").style.overflow = "hidden";

      modalName = document.querySelector(".modal__card-name");
      modalDescription = document.querySelector(".modal__card-description");
      getInfoFilms(
        e.target.parentNode.parentNode.firstElementChild.value,
        modalName,
        modalDescription
      );
    });
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault;

    if (e.target === modal) {
      modal.classList.remove("modal-show");
    }
    document.querySelector("#phone__menu-id-body").style.overflow = "auto";
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("modal-show");
    }
    document.querySelector("#phone__menu-id-body").style.overflow = "auto";
  });
}
