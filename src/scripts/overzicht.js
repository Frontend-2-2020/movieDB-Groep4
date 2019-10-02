import Axios from "axios";

export function initOverzicht(){
    const detail= document.querySelector("#detail");
    detail.style.display= "none";
    
    Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a01120a4a3594cd3fa817cfcb63a4e0")
    .then(function(response){
        var overzichtMovieData=response.data.results;
        console.log(overzichtMovieData);
        var allBlock="";
        for (let index = 0; index < overzichtMovieData.length; index++) {
            const overzichtElement = overzichtMovieData[index];
            console.log(overzichtElement);
            var title= overzichtElement.title;
            var release= overzichtElement.release_date;
            var score= overzichtElement.vote_average;
            var poster=  "https://image.tmdb.org/t/p/w500/" +overzichtElement.poster_path;
            var movieId= "index.html?movieId="+ overzichtElement.id;
            var block= `
            <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="${poster}"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Released: ${release}</p>
                <p class="card-text">Score: ${score}</p>
                <a href="${movieId}" class="btn btn-primary">Description</a>
              </div>
            </div>
          </div>`
         allBlock+= block;
        } 
        var moviePage= document.querySelector("#moviePage");
        moviePage.innerHTML= allBlock;
    })
    
}
