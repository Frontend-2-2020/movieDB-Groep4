import Axios from "axios";

export function initOverzicht() {
  const detail = document.querySelector("#detail");
  detail.style.display = "none";
  // fetching the data through Axios
  Axios.get(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a01120a4a3594cd3fa817cfcb63a4e0"
  ).then(function(response) {
    var overzichtMovieData = response.data.results;
    console.log(overzichtMovieData);
    var allBlock = "";
    for (let index = 0; index < overzichtMovieData.length; index++) {
      const overzichtElement = overzichtMovieData[index];
      // remove console.log when done !
      console.log(overzichtElement);
      var title = overzichtElement.title;
      var release = overzichtElement.release_date;
      var score = overzichtElement.vote_average;
      var poster =
        "https://image.tmdb.org/t/p/w500/" + overzichtElement.poster_path;
      var movieId = "index.html?movieId=" + overzichtElement.id;
      // pasting the HTML in JS using the backticks en placing it into a variable
      var block = `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card mb-4">
              <img
                class="card-img-top"
                src="${poster}"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Released: ${release}</p>
                <p class="card-text">Score: ${score}</p>
                <div class="col-xs-4 text-center">
                <a href="${movieId}" class="btn btn-primary">Description</a>
                </div>
              </div>
            </div>
          </div>`;
      allBlock += block;
    }
    var moviePage = document.querySelector("#moviePage");
    moviePage.innerHTML = allBlock;
  });
}
