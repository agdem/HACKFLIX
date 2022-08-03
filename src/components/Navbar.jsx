import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  return (
    <div className="container sticky-top bg-black">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container p-0">
          <Link
            to={"/"}
            className="text-decoration-none text-danger navbar-brand fs-1 ps-0"
          >
            Hackflix
          </Link>

          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <Link
                to={"/buscar"}
                className="text-decoration-none text-primary nav-link fw-bold"
              >
                {" "}
                Buscar Pelicula{" "}
                <i className="fa-solid text-danger fa-magnifying-glass"></i>
              </Link>

              <Link
                to={"/sobre-nosotros"}
                className="text-decoration-none text-secondary nav-link active"
              >
                Sobre Nosotros
              </Link>

              <Link
                to={"/contacto"}
                className="text-decoration-none text-secondary nav-link"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
