import "./movieList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Filter from "./Filter";

import InfiniteScroll from "react-infinite-scroll-component";

const ratingMap = {
  0: 0,
  1: 0,
  2: 2,
  3: 4,
  4: 6,
  5: 8,
};

function MovieList({
  stars,
  show,
  setShow,
  setModalMovie,
  modalMovie,
  setStars,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=621e30b5dbb7b35d10faf840dfe1c60f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );

      setAllMovies([...allMovies, ...response.data.results]);
    };
    getMovies();
  }, [page]);

  // filter

  const ratedMovies = allMovies.filter((movie) => {
    return stars === 1
      ? movie.vote_average > ratingMap[stars]
      : movie.vote_average >= ratingMap[stars];
  });

  return (
    <InfiniteScroll
      dataLength={allMovies.length} //This is important field to render the next data
      next={() => setPage((prev) => prev + 1)}
      hasMore={true}
      loader={<h4></h4>}
      endMessage={<p style={{ textAlign: "center" }}></p>}
    >
      <div className="container">
        <div className="d-flex flex-column">
          <div>
            <Filter stars={stars} setStars={setStars} />
          </div>

          <div className="container list d-flex flex-wrap justify-content-center">
            {ratedMovies.map((movie) => (
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
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default MovieList;
