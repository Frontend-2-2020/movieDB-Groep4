import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "query-string";

//location.search = localhost:8080?moveId=200
const parsed = queryString.parse(location.search);
// queryString.parse("?movieId=200"); => {movieId: 200}
// queryString.parse(""); => {}

if (parsed.movieId) {
  const overzicht = document.querySelector("#overzicht");
  overzicht.style.display = "none";
} else {
  const detail = document.querySelector("#detail");
  detail.style.display = "none";
}
