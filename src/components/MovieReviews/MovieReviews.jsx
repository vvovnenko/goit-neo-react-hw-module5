import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api/movies.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleMovieReviews = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      setReviews(await getMovieReviews(movieId));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleMovieReviews();
  }, []);

  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <div className={css.reviewCard}>
                    <p>
                      <strong>Author: {author}</strong>
                    </p>
                    <p>{content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>OMG, there are no reviews for this movie!</div>
        ))}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}
    </>
  );
};

export default MovieReviews;
