import "./home.css";
import Header from "./Header";
import MovieList from "./MovieList";

function Home({ stars, show, setShow, setModalMovie, modalMovie, setStars }) {
  return (
    <div className="container home">
      {" "}
      <div>
        <Header />
        <div className="d-flex justify-content-center">
          <hr className="text-muted hr" />
        </div>
        <MovieList
          setStars={setStars}
          stars={stars}
          show={show}
          setShow={setShow}
          setModalMovie={setModalMovie}
          modalMovie={modalMovie}
        />
      </div>
    </div>
  );
}

export default Home;
