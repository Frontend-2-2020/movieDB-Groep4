import Axios from "axios";

export function initOverzicht(){
    const detail= document.querySelector("#detail");
    detail.style.display= "none";
    
    Axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a01120a4a3594cd3fa817cfcb63a4e0")
    .then(function(response){
        var overzichtMovieData=response.data.results;
        console.log(overzichtMovieData);
        for (let index = 0; index < overzichtMovieData.length; index++) {
            const overzichtElement = overzichtMovieData[index];
            console.log(overzichtElement);
        }
    })
    
}
