import React, { useEffect, useState } from "react";
import { getMovieList, loadMoviesSearched } from "../../services/tmdb";
import { Input } from "../input";
import { Loading } from "../loading";
import { MoviesResults } from "../moviesResults";
import { ScrollMovie } from "../scrollMovie";
import { Box } from "./styles";

interface Category {
  title: string;
  elements: {
    results: [
      {
        poster_path: string;
      }
    ];
  };
}

interface Movie {
  title: string;
  poster_path: string;
}

export const MoviesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState<string>("");
  const [moviesSearched, setMoviesSearched] = useState<Movie[]>([]);
  const [pagination, setPagination] = useState<number>(1);
  let timingOfLoading: number = 2000; // 2 segundos
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieList(pagination);
      setCategories(data);
    };
    fetchData();
  }, [pagination]);

  async function nextPagination() {
    if (pagination === 10) return;
    setPagination((pagination) => pagination + 1);
  }

  async function backPagination() {
    if (pagination === 1) return;
    setPagination((pagination) => pagination - 1);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const textTyped = event.currentTarget.value;
    setSearch(textTyped);
    setLoading(true);

    setTimeout(() => {
      filterMovies(textTyped.toLowerCase());
    }, timingOfLoading);
  }

  async function filterMovies(search: string) {
    if (search === "") return;

    const fetchData = async () => {
      const searchMovies = await loadMoviesSearched(search);
      setMoviesSearched(searchMovies.results);

      setLoading(false)
    };
    fetchData();
  }

  return (
    <div>
      <Input
        type="search"
        placeholder="Buscar filmes..."
        value={search}
        onChange={handleChange}
      />
      <Box>
        {loading && search !== '' &&(
          <Loading />
        )}

        {search !== "" 
          ? moviesSearched.map((movie: Movie, index: number) => (
              <MoviesResults
                title={movie.title}
                key={index}
                src={movie.poster_path}
              />
            ))
          : categories.map((category: Category, index: number) => (
              <div key={index}>
                <ScrollMovie
                  title={category.title}
                  elements={category.elements}
                  nextPagination={nextPagination}
                  backPagination={backPagination}
                />
                <p>Página {pagination} de 10</p>
              </div>
            ))}
      </Box>
    </div>
  );
};
