import "./header.css";
import { Carousel } from "react-bootstrap";
import { useState, render } from "react";

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <h3 className="text-start text-white  fs-3">Próximamente</h3>
      </div>
      <hr className="text-muted mb-5" />
      <div className="d-flex justify-content-center">
        <div className="header">
          <Carousel
            className="mb-5"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 border border-dark img-fluid"
                src="/img/guaSon.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>Joker</h5>
                <p>
                  A mentally troubled stand-up comedian embarks on a downward
                  spiral that leads to the creation of an iconic villain.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/img/tomb-raider.jpeg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h5>Tomb Raider 2</h5>
                <p>
                  Lara Croft (Alicia Vikander), the fiercely independent
                  daughter of a missing adventurer, must push herself beyond her
                  limits when she discovers the island where her father, Lord
                  Richard Croft (Dominic West) disappeared.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/img/rampage.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h5>Rampage</h5>
                <p>
                  When three different animals become infected with a dangerous
                  pathogen, a primatologist and a geneticist team up to stop
                  them from destroying Chicago.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr className="text-muted" />
    </>
  );
}

export default Header;
