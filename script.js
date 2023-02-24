async function startAsync() {
  let getFilmsFunction = await getFilms();
  let getInfoFilmsFunction = await getInfoFilms();
  let modalOpenFunction = await modalOpen();
}

startAsync();
