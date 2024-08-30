import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import MovieDetails from "../../components/MovieDetails/MovieDetails.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { getMovie } from "../../api/movies.js";
import MovieNavigation from "../../components/MovieNavigation/MovieNavigation.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const refLocation = useRef(location.state);

  const handleMovieById = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await getMovie(movieId);
      setMovie(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMovieById();
  }, []);

  return (
    <section className="container">
      <Link to={refLocation.current || "/movies"}>← GoBack</Link>

      {movie && !isLoading && <MovieDetails movie={movie} />}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      <p>Additional information</p>

      <MovieNavigation />

      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
