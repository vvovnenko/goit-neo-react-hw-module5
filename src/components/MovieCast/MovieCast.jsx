import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import { getMovieCast } from "../../api/movies.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TmdbImg from "../TmdbImg/TmdbImg.jsx";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleMovieCast = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      setCast(await getMovieCast(movieId));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMovieCast();
  }, [movieId]);

  return (
    <>
      {cast &&
        (cast.length > 0 ? (
          <ul>
            {cast.map(({ id, profile_path, name, character }) => {
              return (
                <li key={id}>
                  <div className={css.castCard}>
                    <TmdbImg path={profile_path} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>OMG, there are no cast for this movie!</div>
        ))}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
    </>
  );
};

export default MovieCast;
