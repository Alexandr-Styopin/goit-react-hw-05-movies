import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../fethAPI';
import { Image } from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    getMovieCredits(moviesId)
      .then(data => {
        setActors(data.cast);
      })
      .catch(err => console.log(err));
  }, [moviesId]);

  return (
    <div>
      <ul>
        {actors.map(({ id, name, profile_path }) => (
          <li key={id}>
            <p>{name}</p>
            <Image
              src={`${BASE_URL}${
                profile_path ?? '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
              }`}
              alt={name}
              width="150px"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
