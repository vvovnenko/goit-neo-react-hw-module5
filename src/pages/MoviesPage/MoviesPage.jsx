import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import { searchMovies } from "../../api/movies.js";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get("query") ?? "";
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!queryValue) return;
    const handleSearchMovies = async () => {
      setIsLoading(true);
      setIsError(false);
      setMovies(null);

      try {
        setMovies(await searchMovies(queryValue));
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    handleSearchMovies();
  }, [queryValue]);

  const handleSearchMovie = (query) => {
    setSearchParams(query);
  };

  return (
    <section className="container">
      <SearchForm handleSearchMovie={handleSearchMovie} />

      {movies &&
        (movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <div>Movies with search criteria not found</div>
        ))}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
    </section>
  );
};

export default MoviesPage;
