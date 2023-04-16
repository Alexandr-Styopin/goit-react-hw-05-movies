import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovies } from '../../fethAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams('');
  const inputValue = searchParams.get('inputValue') ?? '';

  const handleSubmitForm = e => {
    e.preventDefault();
    const value = e.target.elements.input.value.trim();

    setSearchParams({ inputValue: value });
  };

  useEffect(() => {
    if (inputValue === '') {
      return;
    }

    getMovies(inputValue)
      .then(moviesData => setMovies(moviesData.results))
      .catch(err => console.log(err));
  }, [inputValue]);

  return (
    <>
      <SearchForm onSubmit={handleSubmitForm} />
      <MoviesList movies={movies} />
    </>
  );
}
