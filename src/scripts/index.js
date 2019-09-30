import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from "query-string";

//location.search = localhost:8080?moveId=200
const parsed = queryString.parse(location.search);
// queryString.parse("?moveId=200"); => {movieId: 200}
// queryString.parse(""); => {}

if(parsed.movieId){
    //detail
} else {
    //overzicht
}