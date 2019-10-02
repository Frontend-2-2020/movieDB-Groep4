import Axios from "axios";

export function initDetail() {
  const overzicht = document.querySelector("#overzicht");
  overzicht.style.display = "none";

  // Make a request for a user with a given ID
  Axios.get(
    "https://api.themoviedb.org/3/movie/550?api_key=dc37b97357fd291174e896aa7ce44636"
  ).then(function(response) {
    // handle success
    console.log(response);
  });
}
