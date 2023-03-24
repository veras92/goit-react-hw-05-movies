import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';
import photoPathPlace from 'utils/photoPlaceholder';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const movieCast = await API.getMovieCredits(Number(movieId));

        if (!movieCast) {
          return;
        }
        setMovieCast([...movieCast]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieCredits();
  }, [movieId]);

  if (!movieCast) {
    return null;
  }

  if (!movieCast.length) {
    return <p>We don't have any cast for this movies.</p>;
  }

  return (
    <ul className={css.castList}>
      {movieCast.map(({ profile_path, name, character }) => {
        return (
          <li key={name}>
            <img
              className={css.castImg}
              src={photoPathPlace(profile_path)}
              alt={name}
            />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
