import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MovieRedirect(props) {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/pelicula/${params.id}`);
  }, []);

  return <div></div>;
}

export default MovieRedirect;
