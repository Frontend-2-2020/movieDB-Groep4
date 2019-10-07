import Axios from "axios";
// exporting function to be used by other js pages
export function initOverzicht() {
  const detail = document.querySelector("#detail");
  detail.style.display = "none";
  // fetching the data through Axios
  Axios.get(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a01120a4a3594cd3fa817cfcb63a4e0"
  ).then(function(response) {
    // Making variable database
    var overzichtMovieData = response.data.results;
    // Making empty string to write in data
    var allBlock = "";
    // Using for loop to cut our array to small objects
    for (let index = 0; index < overzichtMovieData.length; index++) {
      const overzichtElement = overzichtMovieData[index];
      // Making var in the function since it can only exists in the function
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
          // Making sure that it our string keeps the previous data, by allBlock = allBlock+block or:
      allBlock += block;
    }
    // Defining our var to write it into our page
    var moviePage = document.querySelector("#moviePage");
    moviePage.innerHTML = allBlock;
  });
}
// Extra: Adding a smooth scroll to top button
var toTop= document.querySelector("#toTop");
toTop.onclick=function(){
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}