function fetchJsonApi(url) {
  return fetch(url).then(function (response) {
    console.log(response);
    return response.json();
  });
  // --> Mindegyik thennek a visszatérési értéke egy Promise nevezetű object, és annak van egy then nevű függvénye (lehetne itt 50 then is)
}

function fetchMyJoke() {
  return fetchJsonApi("/jokes"); // relatív url (localhost:8080/jokes --> így érem el) az aktuálisan beírt címhez képest a böngésző tetején!!
}

function fetchApiJoke() {
  const url = "https://api.chucknorris.io/jokes/random";
  return fetchJsonApi(url).then(function (joke) {
    return { text: joke.value };
  }); // abszolút url, abszolút elérési útvonal
}

function displayJoke(joke) {
  const text = joke.text;
  const jokeDiv = document.createElement("div");
  jokeDiv.className = "joke-div";
  jokeDiv.innerText = text;
  document.querySelector("#joke-panel").append(jokeDiv);
}

function renderJokesFromMany() {
  fetchMyJoke().then(displayJoke);
  fetchApiJoke().then(displayJoke);
}

function main() {
  let jokeBtn = document.querySelector("#joke-btn");

  jokeBtn.addEventListener("click", renderJokesFromMany);
}

window.addEventListener("load", main);
