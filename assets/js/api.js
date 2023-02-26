const templateCard = document.querySelector("#template__card"); // search template
let cloneCard, // clone card for template in fetch
  cardImg, // img
  cardName, // name
  cardTime, // time
  cardRating, // rating
  cardGenres, // genres
  cardYear, // year
  inputId; // input__id-hidden

const filmGrid = document.querySelector(".film-grid"); // search film-grid for clone template

const baseUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films"; // link rest API
const apiKey = "8c8e1a50-6322-4135-8875-5d40a5420d86";
// const apiKey = "0859f8b3-b98a-4d7e-a652-014497fbe4d2";
// const apiKey = "86417ac8-d993-4345-aec1-1b0aed2d0c29";
let responseGetFilms;
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

    responseGetFilms = response.status; // check response status

    const dataJson = await response.json();
    const dataFilms = dataJson.films;

    // forEach for our element API
    dataFilms.forEach((el) => {
      cardImg = templateCard.content.querySelector(".card__img img"); // use our template and .content + querySelector
      cardImg.src = el.posterUrlPreview; // get src and assign new src in API el (forEach) + url (posterUrl) in API

      cardName = templateCard.content.querySelector(".card__name"); // Name card
      el.nameEn // check name language
        ? (cardName.textContent = el.nameEn)
        : (cardName.textContent = el.nameRu);

      cardRating = templateCard.content.querySelector(".card__rating");
      // console.log(el.rating);

      if (el.rating == null) {
        el.rating = "0";
      }

      let newRating = el.rating.replace("%", "");
      if (newRating > 10) {
        newRating = newRating / 10;
      }

      el.rating // check rating film
        ? (cardRating.textContent = newRating)
        : (cardRating.textContent = "0");

      // check rating for that add class (border style)
      if (newRating <= 5) {
        cardRating.classList.add("card__rating-red");
        cardRating.classList.remove("card__rating-green");
        cardRating.classList.remove("card__rating-yellow");
      } else if (newRating > 5 && newRating < 7) {
        cardRating.classList.add("card__rating-yellow");
        cardRating.classList.remove("card__rating-green");
        cardRating.classList.remove("card__rating-red");
      } else {
        cardRating.classList.add("card__rating-green");
        cardRating.classList.remove("card__rating-yellow");
        cardRating.classList.remove("card__rating-red");
      }

      cardGenres = templateCard.content.querySelector(".card__genres");
      let arrGenre = []; // create empty array for map
      el.genres.map((genre) => {
        // use map for write in our array
        arrGenre.push(genre.genre + "," + " "); // add "," and " "
      });
      cardGenres.textContent = arrGenre.join(""); // use join because delete default ","

      // console.log(el.filmId);
      inputId = templateCard.content.querySelector(".input__id-hidden");
      inputId.value = el.filmId;

      cloneCard = templateCard.content.cloneNode(true); // Important! our template cloneNode
      filmGrid.appendChild(cloneCard); // append clone
    });
  } catch (error) {
    // check error
    console.log("ERROR------>" + " " + error);
  }
}

// function for get information film
async function getInfoFilms(cardFilmId, modalName, modalDescription, modalImg) {
  try {
    const response = await fetch(`${baseUrl}/${cardFilmId}`, {
      method: "GET",
      headers: {
        "X-API-KEY": `${apiKey}`, // key
        "Content-Type": "application/json",
      },
    });

    const dataInfoFilms = await response.json(); // response for api
    // console.log(dataInfoFilms);

    modalName.innerText = dataInfoFilms.nameRu; // name film
    modalDescription.innerText = dataInfoFilms.description; // description film
    modalImg.src = dataInfoFilms.posterUrl; // image film
  } catch (error) {
    // check error
    console.log("ERROR------>" + " " + error);
  }
}
