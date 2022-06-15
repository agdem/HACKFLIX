import Home from "./Home";
import MovieListPagination from "./MovieListPagination";
import Header from "./Header";
import ReactPaginate from "react-paginate";

function HomePagination({
  stars,
  setStars,
  show,
  setShow,
  setModalMovie,
  modalMovie,
}) {
  return (
    <div className="d-flex justify-content-center">
      {" "}
      <div className="home">
        <Header />
        <hr className="text-muted" />
        <MovieListPagination
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

export default HomePagination;
