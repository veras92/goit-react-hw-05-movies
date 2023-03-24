import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';
import API from 'services/API';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const trendingMovies = await API.getTrendMovies();
        if (!trendingMovies) {
          return;
        }
        setMovies([...trendingMovies]);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <main className={css.container}>
      <h1>Trending today🔥</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
