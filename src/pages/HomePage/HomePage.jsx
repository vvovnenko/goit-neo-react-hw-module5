import { useEffect, useState } from "react";

import { getTrendingMovies } from "../../api/movies.js";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleTrendingMovies = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      setMovies(await getTrendingMovies());
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleTrendingMovies();
  }, []);

  return (
    <section>
      <h1>Trending today</h1>
      {movies.length > 0 && !isLoading && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </section>
  );
};

export default HomePage;
