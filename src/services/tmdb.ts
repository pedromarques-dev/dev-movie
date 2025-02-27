const API_KEY = "fa6fc9c1047796a4005e64a3b7d0803d";
const baseURL = "https://api.themoviedb.org/3";

const loadData = async (url: string) => {
  const response = await fetch(`${baseURL}${url}`);
  const json = await response.json();
  return json;
};

export const loadDetailsMovie = async (id: string) => {
  const response = await fetch(
    `${baseURL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
  );
  const json = response.json();
  return json;
};

export const loadMoviesSearched = async (str: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=${str}`
  );
  const json = response.json();
  return json;
};

export const getMovieList = async (pagination: number) => {
  return [
    {
      title: "Aventura",
      elements: await loadData(
        `/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}&page=${pagination}`
      ),
    },
    {
      title: "Terror",
      elements: await loadData(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}&page=${pagination}`
      ),
    },
    {
      title: "Ficção cientifica",
      elements: await loadData(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}&page=${pagination}`
      ),
    },
    {
      title: "Animação",
      elements: await loadData(
        `/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}&page=${pagination}`
      ),
    },
    {
      title: "Suspense",
      elements: await loadData(
        `/discover/movie?with_genres=9648&language=pt-BR&api_key=${API_KEY}&page=${pagination}`
      ),
    },
  ];
};
