import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "./movieModal.css";
function MovieModal({ modalMovie, show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      {modalMovie && (
        <Modal show={show} onHide={handleClose} animation={true}>
          <div className="bg-dark">
            <Modal.Header closeButton>
              <Modal.Title className="text-danger">
                <h4>{modalMovie.title}</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-white">
              <div className="d-flex">
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${modalMovie.poster_path}`}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="ms-4 me-0">
                  <span className="text-muted d-block">
                    Release Date :{" "}
                    <span className="text-light">
                      {modalMovie.release_date}
                    </span>
                  </span>
                  <span className="text-muted d-block">
                    IMBD Rating :{" "}
                    <span className="text-light">
                      {modalMovie.vote_average}
                    </span>
                  </span>
                  <span className="text-muted d-block">
                    IMBD Votes :{" "}
                    <span className="text-light">{modalMovie.vote_count}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <p>{modalMovie.overview}</p>
              </div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </div>
        </Modal>
      )}
    </>
  );
}

export default MovieModal;
