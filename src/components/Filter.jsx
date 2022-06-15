import "./filter.css";
import { useState } from "react";

function Filter({ stars, setStars }) {
  const [color, setColor] = useState("gold");

  const filterMovies = (starNumber) => {
    if (starNumber !== stars) {
      setStars(starNumber);
      setColor("gold");
      console.log("entra al if");
      console.log(color);
    } else {
      console.log("entra al else");
      console.log(color);

      if (color === "gold") {
        setColor("white");
        setStars(0);
      } else if (color === "white") {
        setColor("gold");
      }
    }
  };

  return (
    <div className="container-sm">
      <div className="row-sm">
        <div className="col-md">
          <p className="mt-3">
            Filtrar por rating :
            <i
              onClick={() => filterMovies(1)}
              className={`fa-${
                stars >= 1 ? `solid ${color}` : "regular gold"
              } fa-star ms-2`}
            ></i>
            <i
              onClick={() => filterMovies(2)}
              className={`fa-${
                stars >= 2 ? `solid ${color}` : "regular gold"
              } fa-star`}
            ></i>
            <i
              onClick={() => filterMovies(3)}
              className={`fa-${
                stars >= 3 ? `solid ${color}` : "regular gold"
              } fa-star`}
            ></i>
            <i
              onClick={() => filterMovies(4)}
              className={`fa-${
                stars >= 4 ? `solid ${color}` : "regular gold"
              } fa-star`}
            ></i>
            <i
              onClick={() => filterMovies(5)}
              className={`fa-${
                stars >= 5 ? `solid ${color}` : "regular gold"
              } fa-star`}
            ></i>
            & Más
          </p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
