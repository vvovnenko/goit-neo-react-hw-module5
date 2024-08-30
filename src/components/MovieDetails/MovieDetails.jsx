import styles from "./MovieDetails.module.css";
import TmdbImg from "../TmdbImg/TmdbImg.jsx";

const MovieDetails = ({
  movie: { backdrop_path, title, overview, genres, vote_average },
}) => {
  return (
    <div className={styles.contentWrapper}>
      <TmdbImg path={backdrop_path} alt={title} />
      <div>
        <h1>{title}</h1>
        <span>User Score: {vote_average}</span>
        <div>
          <span>
            <strong>Overview</strong>
          </span>
          <p>{overview}</p>
        </div>
        <div>
          <span>
            <strong>Genres</strong>
          </span>
          <p>{genres.map((genre) => genre.name).join(" ")}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
