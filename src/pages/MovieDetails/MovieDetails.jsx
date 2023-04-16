import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { getMoviesDetails } from '../../fethAPI';
import {
  GoBack,
  GoBackWrapper,
  InfoWrapper,
  InfoTextWrapper,
  ReitingText,
  Overview,
  GenresWrapper,
  Genres,
} from './MovieDetails.syled';

export default function MovieDetails() {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocationRef);

  const [movieDetails, setMovieDetails] = useState('');
  const { moviesId } = useParams();

  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    getMoviesDetails(moviesId)
      .then(movieDetails => setMovieDetails(movieDetails))
      .catch(err => console.log(err));
  }, [moviesId]);

  if (movieDetails === '') {
    return;
  }

  return (
    <>
      <GoBackWrapper>
        <GoBack to={backLinkLocationRef.current}>Go Back</GoBack>
      </GoBackWrapper>
      <InfoWrapper>
        <img
          src={`${BASE_URL}${movieDetails.poster_path}`}
          alt=""
          width="300px"
        />
        <InfoTextWrapper>
          <h1>{movieDetails.title}</h1>
          <ReitingText>Reiting: {movieDetails.vote_average}</ReitingText>
          <Overview> {movieDetails.overview}</Overview>
          <GenresWrapper>
            <p>Genres:</p>
            <Genres>
              {movieDetails.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
          </GenresWrapper>
        </InfoTextWrapper>
      </InfoWrapper>

      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
