import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "query-string";
import { initOverzicht } from './overzicht';
import { initDetail } from './detail';

//location.search = localhost:8080?moveId=200
const parsed = queryString.parse(location.search);
// queryString.parse("?movieId=200"); => {movieId: 200}
// queryString.parse(""); => {}

//Enkel onderscheid tussen movie overzicht en detail
if(parsed.movieId){
    initOverzicht();
} 
else {
    initDetail();
}
