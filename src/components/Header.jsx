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
      {" "}
      <h3
        style={{ fontFamily: "PT Sans" }}
        className="text-start text-white mt-3 ms-5 fs-3"
      >
        Próximamente
      </h3>
      <div className="d-flex justify-content-center">
        <div className="header">
          <div>
            <h4 className="text-start text-white navbar-light navbar-nav nav-link"></h4>
          </div>
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
                className="d-block w-100 border border-dark img-fluid"
                src="/img/IronMan.jpeg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h5>Iron Man</h5>
                <p>
                  A billionaire industrialist and genius inventor, Tony Stark
                  (Robert Downey Jr.), is conducting weapons tests overseas, but
                  terrorists kidnap him to force him to build a devastating
                  weapon. Instead, he builds an armored suit and upends his
                  captors. Returning to America, Stark refines the suit and uses
                  it to combat crime and terrorism.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 border border-dark img-fluid"
                src="/img/soNic.webp"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h5>Sonic The Movie</h5>
                <p>
                  After discovering a small, blue, fast hedgehog, a small-town
                  police officer must help him defeat an evil genius who wants
                  to do experiments on him.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Header;
