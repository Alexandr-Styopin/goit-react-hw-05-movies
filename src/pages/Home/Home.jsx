import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from '../../fethAPI';

import { TrendingList, TrendingItem, TrendingLink } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <TrendingList>
      {trendingMovies.map(movie => (
        <TrendingItem key={movie.id}>
          <TrendingLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ?? movie.name}
          </TrendingLink>
        </TrendingItem>
      ))}
    </TrendingList>
  );
}
