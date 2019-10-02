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
            var block= `
            <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="overzichtMovieData.poster_path"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">It part 2</h5>
                <p class="card-text">21/09/2019</p>
                <p class="card-text">9/10</p>
                <a href="#" class="btn btn-primary">Lets A Go</a>
              </div>
            </div>
          </div>`
         allBlock+= block;
        } 
        var moviePage= document.querySelector("#moviePage");
        moviePage.innerHTML= allBlock;
    })
    
}
