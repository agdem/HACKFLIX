import "./navbar.css";

function Navbar(props) {
  return (
    <div className="d-flex justify-content-center sticky-top bg-black">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid p-0">
          <a className="navbar-brand text-danger ms-5 fs-1" href="/">
            Hackflix
          </a>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link text-white fw-bold" href="/buscar">
                {" "}
                Buscar Pelicula{" "}
                <i className="fa-solid text-danger fa-magnifying-glass"></i>
              </a>
              <a
                className="nav-link active text-secondary"
                aria-current="page"
                href="/sobre-nosotros"
              >
                Sobre Nosotros
              </a>
              <a className="nav-link text-secondary" href="/contacto">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
