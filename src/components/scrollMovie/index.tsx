// import { useState } from "react";
import { Link } from "react-router-dom";
import { IScrollMovie } from "../../interfaces";
import { Section } from "./styles";

export const ScrollMovie = (props: IScrollMovie) => {
  return (
    <Section>
      <h2 id={props.title.toLowerCase()}>{props.title}</h2>
      <div>
        {props.elements.results.map((movie: any, index: number) => (
          <Link key={index} to={`/${movie.id}`}>
            <section>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={props.title}
              />
            </section>
          </Link>
        ))}
      </div>
    </Section>
  );
};
