import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import API from 'services/API';
import picturePathPlace from 'utils/placeholder';
import genresList from 'utils/genresList';
import GoBackBtn from 'components/GoBackBtn';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const movieDetails = await API.getMovieDetails(Number(movieId));

        if (!movieDetails) {
          return;
        }
        setMovieDetails({ ...movieDetails });
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const {
    poster_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieDetails;

  const releaseYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <section className={css.section}>
      <GoBackBtn to={backLinkHref}>Go back</GoBackBtn>
      <div className={css.movieDetails}>
        <img
          className={css.movieDetailsPoster}
          src={picturePathPlace(poster_path)}
          alt={original_title}
        />
        <div className={css.movieDetailsDescription}>
          <h2>
            {original_title} ({releaseYear})
          </h2>
          <p>User Score: {userScore} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList(genres)}</p>
        </div>
      </div>
      <div className={css.movieDetailsInform}>
        <h3 className={css.movieDetailsInformTitle}>Additional information</h3>
        <ul className={css.movieDetailsInformList}>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading ...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;
