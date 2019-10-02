import Axios from "axios";

export function initDetail() {
  const overzicht = document.querySelector("#overzicht");
  overzicht.style.display = "none";

  // Make a request for a user with a given ID
  Axios.get(
    "https://api.themoviedb.org/3/movie/550?api_key=dc37b97357fd291174e896aa7ce44636"
  ).then(function(response) {
    console.log(response.data);

    document.getElementById("backdrop").style.backgroundImage =
      "url('https://image.tmdb.org/t/p/w1280" +
      response.data.backdrop_path +
      "')";
    document.getElementById("title").innerHTML = response.data.original_title;
    document.getElementById("vote").innerHTML =
      "Vote Average: " + response.data.vote_average;
    document.getElementById("release").innerHTML =
      "Release date: " + response.data.release_date;
    document.getElementById("overview").innerHTML = response.data.overview;

    const production = response.data.production_companies;
    let prodHtml = "";

    for (let index = 0; index < production.length; index++) {
      const company = production[index];
      prodHtml = prodHtml + " , " + company.name;
    }

    document.getElementById("production").innerHTML = prodHtml;
  });
}
