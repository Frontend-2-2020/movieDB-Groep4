export function initDetail() {
  const overzicht = document.querySelector("#overzicht");
  overzicht.style.display = "none";
}

const axios = require("axios");

// Make a request for a user with a given ID
axios.get("https://api.themoviedb.org/3/movie/429617").then(function(response) {
  // handle success
  console.log(response);
});
