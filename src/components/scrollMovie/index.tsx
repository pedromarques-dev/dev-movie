// import { useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IScrollMovie } from "../../interfaces";
import { Section } from "./styles";


export const ScrollMovie = (props: ICategory) => {
  return (
    <Section>
      <h2 id={props.title.toLowerCase()}>{props.title}</h2>
      <div>
        {props.elements.results.map((movie: IScrollMovie) => {
        return (
          <Link key={movie.id} to={`/${movie.id}`}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={props.title}
              />
            </div>
          </Link>
        )})}
      </div>
    </Section>
  );
};
