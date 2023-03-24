import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'f8cde7d6eca5a69b3ec98acdc4dd8516';

async function getTrendMovies(page = 1) {
  const url = `trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const { data } = await axios.get(url);

  return data.results.map(({ title, id }) => ({
    title,
    id,
  }));
}

async function searchMovies(query) {
  const url = `search/movie?api_key=${API_KEY}&language=en-US&query==${query}`;
  const { data } = await axios.get(url);

  return data.results.map(({ title, id }) => ({
    title,
    id,
  }));
}

async function getMovieDetails(id) {
  const url = `/movie/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = data;

  return {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  };
}

async function getMovieCredits(id) {
  const url = `/movie/${id}/credits?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data.cast.map(({ profile_path, name, character }) => ({
    profile_path,
    name,
    character,
  }));
}

async function getMovieReviews(id) {
  const url = `/movie/${id}/reviews?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data.results.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
}

const api = {
  getTrendMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default api;
