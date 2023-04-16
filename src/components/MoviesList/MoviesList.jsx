import { useLocation } from 'react-router-dom';
import { SearchList, SearchItem, SearchLink } from './MoviesList.styled';
export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <SearchList>
      {movies.map(movie => (
        <SearchItem key={movie.id}>
          <SearchLink to={`${movie.id}`} state={{ from: location }}>
            {movie.title ?? movie.name}
          </SearchLink>
        </SearchItem>
      ))}
    </SearchList>
  );
}
