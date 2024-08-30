const IMG_URL = "https://image.tmdb.org/t/p/w500";

const TmdbImg = ({ path, alt, className }) => {
  return <img src={IMG_URL + path} alt={alt} className={className} />;
};

export default TmdbImg;
