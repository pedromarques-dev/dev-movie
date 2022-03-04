// import { useState } from "react";
import { Link } from "react-router-dom";
import { Section } from "./styles";

interface propsScrolLMovie {
  title: string,
  elements: {
    results: [{
      poster_path: string,
    }]
  }
  
  nextPagination: React.MouseEventHandler<HTMLButtonElement>,
  backPagination: React.MouseEventHandler<HTMLButtonElement>,
}

export const ScrollMovie = (props: propsScrolLMovie ) => {

  return (
    <Section>
      <h2 id={props.title.toLowerCase()}>{props.title}</h2>

      <div>
        {props.elements.results.map((movie: any, index: number) => (
          <Link  key={index} to={`/${movie.id}`}>
            <section>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={props.title}
              />
            </section>
          </Link>
        ))}
      </div>
      <button onClick={props.nextPagination}>
          Avançar
      </button>
      <button onClick={props.backPagination}>
          Voltar
      </button>
    </Section>
  );
};
