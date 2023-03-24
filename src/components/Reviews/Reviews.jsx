import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setmovieReview] = useState(null);

  useEffect(() => {
    async function fetchMovieReview() {
      try {
        const movieReview = await API.getMovieReviews(Number(movieId));

        if (!movieReview) {
          return;
        }
        setmovieReview([...movieReview]);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieReview();
  }, [movieId]);

  if (!movieReview) {
    return null;
  }

  if (!movieReview.length) {
    return <p>We don't have any reviews for this movies.</p>;
  }

  return (
    <ul className={css.reviewsList}>
      {movieReview.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
