import "./App.css";

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Search from "./components/Search";
import HomePagination from "./components/HomePagination";
import MovieRedirect from "./components/MovieRedirect";
import Footer from "./components/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [stars, setStars] = useState(0);
  const [show, setShow] = useState(false);
  const [modalMovie, setModalMovie] = useState();
  console.log(navigator.onLine);

  return (
    <div className="App">
      <div className="cont">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                stars={stars}
                setStars={setStars}
                show={show}
                setShow={setShow}
                setModalMovie={setModalMovie}
                modalMovie={modalMovie}
              />
            }
          />
          <Route
            path="/paginacion"
            element={
              <HomePagination
                stars={stars}
                setStars={setStars}
                show={show}
                setShow={setShow}
                setModalMovie={setModalMovie}
                modalMovie={modalMovie}
              />
            }
          />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/buscar" element={<Search />} />
          <Route path="/pelicula/:id" element={<MovieDetails />} />
          <Route path="/movie/:id" element={<MovieRedirect />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
      {/* <MovieModal setShow={setShow} show={show} modalMovie={modalMovie} /> */}
    </div>
  );
}

export default App;
