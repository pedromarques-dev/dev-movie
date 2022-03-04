import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadDetailsMovie } from "../../services/tmdb";
import { Section } from "./styles";

interface IGenre {
  id?: number;
  name: string;
}

interface IMovie {
  title: string;
  image: string;
  description: string;
  genres: IGenre[];
}

export const MovieDetails = () => {
  const [movie, setMovie] = useState<IMovie>({
    title: "",
    image: "",
    description: "",
    genres: [],
  });
  const { id } = useParams();

  console.log("movie", movie);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadDetailsMovie(id);
      setMovie({
        title: data.title,
        image: data.poster_path,
        description: data.overview,
        genres: data.genres.map((genre: IGenre) =>
          genre
        ),
      });
    };
    fetchData();
  }, [id]);

  return (
    <Section>
      <div>
        <section>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.image}`}
            alt="Cartaz do filme"
          />
        </section>
      </div>

      <div>
        <h2>Genêros:</h2>
        <div>
          {
            movie.genres.map((genre: IGenre) => <li key={genre.id}>{genre.name}</li>)
          }
        </div>
        <h2>Sinopse:</h2>
        <p>{movie.description}</p>
      </div>
    </Section>
  );
};
