async function fethTrending() {
  const API_KEY = 'aa1d2a2b8177ac3b5ad3698898d78d80';

  return await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}
fethTrending().then(data => console.log(data));
export const App = () => {
  return <div>React homework template</div>;
};
