const baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films"; // link rest API
async function getFilms() {
  try {
    const response = await fetch(`${baseUrl}/top?type=TOP_100_POPULAR_FILMS`, {
      method: "GET",
      headers: {
        "X-API-KEY": "0859f8b3-b98a-4d7e-a652-014497fbe4d2", // key
        "Content-Type": "application/json",
      },
    });
    const dataJson = await response.json();
    const dataFilms = dataJson.films;
    console.log(dataFilms);

    // forEach for our element API
    dataFilms.forEach((el) => {
      cardImg = templateCard.content.querySelector(".card__img img");
      cardImg.src = el.posterUrl;

      cloneCard = templateCard.content.cloneNode(true);
      filmGrid.appendChild(cloneCard);
    });
  } catch (error) {
    console.log(error);
  }
}
getFilms();

const templateCard = document.querySelector("#template__card"); // search template
let cloneCard; // clone card for template in fetch
let cardImg; // our const img

const filmGrid = document.querySelector(".film-grid"); // search film-grid for clone template
