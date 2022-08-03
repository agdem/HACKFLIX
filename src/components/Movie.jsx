import "./movie.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Movie({ movie, setShow, setModalMovie, modalMovie, show }) {
  return (
    <div className="row">
      <div className="movie col-sm-6 col-md-4 col-lg-2 m-1">
        <Link to={`../pelicula/${movie.id}`}>
          <img
            className="movieImage"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Movie;
