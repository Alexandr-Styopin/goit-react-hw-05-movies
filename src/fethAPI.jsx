export {
  getTrending,
  getMovies,
  getMoviesDetails,
  getMovieCredits,
  getMovieReviews,
};

const API_KEY = 'aa1d2a2b8177ac3b5ad3698898d78d80';
export const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrending() {
  return await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

async function getMovies(inputValue) {
  return await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${inputValue}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

async function getMoviesDetails(movieId) {
  return await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

async function getMovieCredits(movieId) {
  return await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
async function getMovieReviews(movieId) {
  return await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
