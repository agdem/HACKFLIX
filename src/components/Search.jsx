import "./search.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

function Search(props) {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (searchedTitle !== "" && searchedTitle !== null) {
      const getMovies = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=621e30b5dbb7b35d10faf840dfe1c60f&query=${searchedTitle}`
        );

        setSearchedMovies(response.data.results);
        if (response.data.results.length === 0 && searchedTitle !== "") {
          setShowError(true);
        } else {
          setShowError(false);
        }
      };
      getMovies();
    } else {
      setSearchedMovies();
    }
  }, [searchedTitle]);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="searchBy">
        <div className="mb-5 d-flex flex-column">
          <label
            htmlFor="searchMovie"
            className="form-label text-white text-start"
          >
            Ingresá el nombre de la película
          </label>
          <input
            type="text"
            className="form-control searchMovie bg-dark text-light"
            id="searchTitle"
            placeholder="ej: Cinema Paradise"
            value={searchedTitle}
            onChange={(event) => setSearchedTitle(event.target.value)}
          />
        </div>
        <hr className="text-muted" />
        <div className="d-flex flex-wrap justify-content-center">
          {searchedMovies &&
            searchedMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}

          {showError && (
            <p className="text-muted">
              Lo sentimos, no existen películas con el título ingresado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
