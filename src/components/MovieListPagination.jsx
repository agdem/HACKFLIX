import "./movieList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Filter from "./Filter";
import "./movieListPagination.css";

const ratingMap = {
  0: 0,
  1: 0,
  2: 2,
  3: 4,
  4: 6,
  5: 8,
};

function MovieListPagination({
  stars,
  show,
  setShow,
  setModalMovie,
  modalMovie,
  setStars,
}) {
  const [allMovies, setAllMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviePerPage] = useState(20);
  const totalPages = 33891;

  useEffect(() => {
    const getMovies = async () => {
      if (currentPage <= totalPages) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=621e30b5dbb7b35d10faf840dfe1c60f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`
        );
        setAllMovies([...allMovies, ...response.data.results]);
      }
    };
    getMovies();
  }, [currentPage]);

  // filter

  const ratedMovies = allMovies.filter((movie) => {
    return stars === 1
      ? movie.vote_average > ratingMap[stars]
      : movie.vote_average >= ratingMap[stars];
  });

  //   getCurrentMovies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = ratedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="d-flex flex-column">
        <div className="container d-flex flex-wrap justify-content-center">
          {currentMovies.map((movie) => (
            <Movie
              show={show}
              setShow={setShow}
              key={movie.id}
              movie={movie}
              setModalMovie={setModalMovie}
              modalMovie={modalMovie}
            />
          ))}
        </div>

        {ratedMovies.length === 0 && (
          <p className="alert">
            Lo sentimos, no hay películas con este rating.
          </p>
        )}
        <div className="d-flex justify-content-center my-4">
          <ul className="pagination">
            <li className="page-item">
              <a
                onClick={() => previousPage()}
                className="page-link bg-dark"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {currentPage > 1 && (
              <li className="page-item">
                <span
                  className="page-link bg-dark text-muted"
                  aria-hidden="true"
                >
                  {currentPage - 1}
                </span>
              </li>
            )}

            <li className="page-item">
              <span className="page-link bg-dark" aria-hidden="true">
                {currentPage}
              </span>
            </li>
            <li className="page-item">
              <span className="page-link bg-dark text-muted" aria-hidden="true">
                {currentPage + 1}
              </span>
            </li>

            <li className="page-item">
              <a
                onClick={() => nextPage()}
                className="page-link bg-dark"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MovieListPagination;
