import { Section } from "./styles";

interface propsResults {
  title: string,
  src: string
}

export const MoviesResults = (props: propsResults) => {
  return (
    <Section>
      {props.src !== "" && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${props.src}`}
            alt={props.title}
          />
        </div>
      )
      }
    </Section>
  );
};
