// async function for call function (async)
async function startAsync() {
  let getFilmsFunction = await getFilms(); // get films
  // let getInfoFilmsFunction = await getInfoFilms(); // get info films
  let modalOpenFunction = await openModal(); // call modal card

  // check status fetch response.status === 200. Becouse responseGetFilms get undefined, that check == undefined
  if (responseGetFilms == undefined) {
    const modalError = document.querySelector(".modal__error-wrapper");
    modalError.classList.add("modal-show");
  }
}
startAsync();
