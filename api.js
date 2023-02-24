const templateCard = document.querySelector("#template__card"); // search template
let cloneCard, // clone card for template in fetch
  cardImg, // img
  cardName, // name
  cardTime, // time
  cardRating, // rating
  cardGenres, // genres
  cardYear; // year

const filmGrid = document.querySelector(".film-grid"); // search film-grid for clone template

const baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films"; // link rest API
const apiKey = "0859f8b3-b98a-4d7e-a652-014497fbe4d2";
async function getFilms() {
  try {
    // response API , use fetch and transfer url + headers
    const response = await fetch(`${baseUrl}/top?type=TOP_100_POPULAR_FILMS`, {
      method: "GET", // method GET NOT main attribute< becouse get is default
      headers: {
        // main atribute becouse need use universal key
        "X-API-KEY": `${apiKey}`, // key
        "Content-Type": "application/json",
      },
    });
    const dataJson = await response.json();
    const dataFilms = dataJson.films;

    // forEach for our element API
    dataFilms.forEach((el) => {
      cardImg = templateCard.content.querySelector(".card__img img"); // use our template and .content + querySelector
      cardImg.src = el.posterUrl; // get src and assign new src in API el (forEach) + url (posterUrl) in API

      cardName = templateCard.content.querySelector(".card__name"); // Name card
      el.nameEn // check name language
        ? (cardName.textContent = el.nameEn)
        : (cardName.textContent = el.nameRu);

      cardYear = templateCard.content.querySelector(".card__year");
      el.year
        ? (cardYear.textContent = el.year)
        : (cardYear.textContent = "year");

      cardTime = templateCard.content.querySelector(".card__time");
      el.filmLength
        ? (cardTime.textContent = el.filmLength)
        : (cardTime.textContent = "time");

      cardRating = templateCard.content.querySelector(".card__rating");
      el.rating
        ? (cardRating.textContent = el.rating)
        : (cardRating.textContent = "0");

      cardGenres = templateCard.content.querySelector(".card__genres");
      let arrGenre = []; // create empty array for map
      el.genres.map((genre) => {
        // use map for write in our array
        arrGenre.push(genre.genre + "," + " "); // add "," and " "
      });
      cardGenres.textContent = arrGenre.join(""); // use join because delete default ","

      cloneCard = templateCard.content.cloneNode(true); // Important! our template cloneNode
      filmGrid.appendChild(cloneCard); // append clone
    });
  } catch (error) {
    // check error
    console.log(error);
  }
}

async function getInfoFilms() {
  try {
    const response = await fetch(`${baseUrl}/505898`, {
      method: "GET",
      headers: {
        "X-API-KEY": `${apiKey}`, // key
        "Content-Type": "application/json",
      },
    });
    const dataInfoFilms = await response.json();
  } catch (error) {
    // check error
    console.log(error);
  }
}
