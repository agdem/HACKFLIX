import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetails.css";
import { TailSpin } from "react-loader-spinner";

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState();
  const [loader, setLoader] = useState(true);
  const [movieExist, setMovieExist] = useState(true);
  const params = useParams();

  useEffect(() => {
    console.log(params.id);
    const getMovie = async () => {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=621e30b5dbb7b35d10faf840dfe1c60f`
        )
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setMovieExist(false);
          }
          console.log(error.config);
        });
      console.log(response);

      setMovieDetails(response.data);
    };
    getMovie();
    setLoader(false);
  }, []);

  return (
    <>
      {loader && (
        <div className="d-flex justify-content-center">
          <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}

      {movieDetails && (
        <div className="d-flex justify-content-center mt-4">
          <div className="movieDetail d-flex justify-content-center mt-3">
            <div className="card bg-dark border border-secondary ">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                className="card-img-top rounded-0 border-bottom"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title text-danger text-start">
                  {movieDetails.title}
                </h4>
                <hr className="text-muted" />
                <p className="card-text text-start">{movieDetails.overview}</p>
                <div className="d-flex flex-column align-items-start">
                  <div>
                    <span className="text-muted">
                      Release Date :
                      <span className="text-white ms-2">
                        {movieDetails.release_date}
                      </span>
                    </span>
                  </div>
                  <div>
                    <span className="text-muted">
                      IMBD Rating :
                      <span className="text-white ms-2">
                        {movieDetails.vote_average}
                      </span>{" "}
                      <i class="fa-solid fa-star gold"></i>
                    </span>
                  </div>
                  <div>
                    <span className="text-muted">
                      Duration :
                      <span className="text-white ms-2">
                        {movieDetails.runtime} min
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {movieExist === false && (
        <p className="mt-5 text-muted">
          Lo sentimos, no existe una película con este ID.
        </p>
      )}
    </>
  );
}

export default MovieDetails;
