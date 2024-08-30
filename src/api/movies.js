import axios from "axios";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NmU0MDljNGI4MGRiMjc3YmNhMjdmYmIyNWQyY2ExZSIsIm5iZiI6MTcyNDgzODkzNi45NDQxMjksInN1YiI6IjY2Y2VmMmY0NmEzZTVkYjg1OWRkMzBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVrodSUIJqQT0nCJSr-v4IpEPjdmKEJs_WNuRcKcaDk";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};

export const getTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios.get("/trending/movie/day");
  return results;
};

export const searchMovies = async (query, page = 1) => {
  const {
    data: { results },
  } = await axios.get("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return results;
};

export const getMovie = async (id) => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCast = async (id) => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits`);
  return cast;
};

export const getMovieReviews = async (id) => {
  const {
    data: { results },
  } = await axios.get(`/movie/${id}/reviews`);
  return results;
};
