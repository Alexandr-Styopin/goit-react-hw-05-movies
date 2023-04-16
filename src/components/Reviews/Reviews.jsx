import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../fethAPI';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId)
      .then(reviewsData => {
        setReviews(reviewsData.results);
      })
      .catch(err => console.log(err));
  }, [moviesId]);

  if (reviews.length === 0) {
    return (
      <>
        <p>Information is absent</p>
      </>
    );
  }

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
