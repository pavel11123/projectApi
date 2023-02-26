const modal = document.querySelector(".modal-wrapper");

async function openModal() {
  // console.log(id);
  const cardFilm = document.querySelectorAll(".card__film"); // cardFilm - main block for card
  let modalName; // variable modal__card-name for name card
  let modalDescription; // variable modal__card-name for description card
  let modalImg; // variable modal__card-name for description card

  // use foreach for open modal and send API getInfoFilms our data
  cardFilm.forEach((element) => {
    element.addEventListener("click", (e) => {
      modal.classList.add("modal-show"); // add class for open modal window
      document.querySelector("#phone__menu-id-body").style.overflow = "hidden"; // hidden scroll body

      modalCard = document.querySelector(".modal__card"); // main card block
      modalName = document.querySelector(".modal__card-name"); // name card
      modalDescription = document.querySelector(".modal__card-description"); // description card
      modalImg = document.querySelector(".modal__card-img img"); // description card

      getInfoFilms(
        e.target.parentNode.parentNode.firstElementChild.value,
        modalName,
        modalDescription,
        modalImg
      );
    });
  });

  modal.addEventListener("click", (e) => {
    e.preventDefault; // default browser

    // close on click empty place window
    if (e.target === modal) {
      modal.classList.remove("modal-show");
    }
    document.querySelector("#phone__menu-id-body").style.overflow = "auto"; // show scoll body
  });

  // close on click esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("modal-show");
    }
    document.querySelector("#phone__menu-id-body").style.overflow = "auto"; // show scoll body
  });
}
