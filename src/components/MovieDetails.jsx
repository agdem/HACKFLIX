import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./movieDetails.css";
import { TailSpin } from "react-loader-spinner";
import Card from "react-bootstrap/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieDetails(props) {
  const [movieDetails, setMovieDetails] = useState(undefined);
  const [movieExist, setMovieExist] = useState(true);
  const [genre, setGenre] = useState(undefined);
  const [otherMovies, setOtherMovies] = useState(undefined);
  const params = useParams();

  useEffect(() => {
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
        });

      setMovieDetails(response.data);
      setGenre(response.data.genres[0].id);
    };

    getMovie();
  }, []);
  console.log(movieDetails);
  useEffect(() => {
    const getOtherMovies = async () => {
      const responseOtherMovies = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=621e30b5dbb7b35d10faf840dfe1c60f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=100&with_genres=${genre}`
      );

      setOtherMovies([
        responseOtherMovies.data.results[5],
        responseOtherMovies.data.results[6],
        responseOtherMovies.data.results[7],
        responseOtherMovies.data.results[8],
        responseOtherMovies.data.results[9],
        responseOtherMovies.data.results[10],
        responseOtherMovies.data.results[11],
        responseOtherMovies.data.results[12],
      ]);
    };
    getOtherMovies();
  }, [movieDetails]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {movieDetails ? (
        <div>
          <div className="container movie-details d-flex justify-content-center align-items-center">
            <Card className="bg-dark text-white">
              <Card.Img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                alt="Card image"
              />

              <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-start overlay">
                <Card.Title className="fw-bold title">
                  {movieDetails.title}
                </Card.Title>

                <Card.Text className="text-start">
                  {movieDetails.overview}
                </Card.Text>
                <Card.Text>
                  Release Date : {movieDetails.release_date}
                </Card.Text>
                <Card.Text>
                  IMBD Rating : {movieDetails.vote_average}{" "}
                  <i className="fa-solid fa-star gold"></i>
                </Card.Text>
                <Card.Text>Duration : {movieDetails.runtime} min</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <TailSpin height="100" width="100" color="grey" ariaLabel="loading" />
        </div>
      )}
      {otherMovies && (
        <div className="container">
          <h5 className="text-start text-white mb-3">
            People who watched this movie also searched for :
          </h5>
          <hr className="text-muted mb-5" />
          <Carousel responsive={responsive} infinite={true}>
            {otherMovies.map((movie) => {
              return (
                <div className="mb-3" key={movie.id}>
                  <img
                    className="featuredImg mb-4"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="First slide"
                  />
                </div>
              );
            })}
          </Carousel>
          <hr className="text-muted mb-5" />
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
