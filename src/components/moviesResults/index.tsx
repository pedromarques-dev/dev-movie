import { Link } from "react-router-dom";
import { Section } from "./styles";

interface propsResults {
  id: number;
  title: string;
  src: string;
}

export const MoviesResults = (props: propsResults) => {
  return (
    <Section>
      {props.src !== "" && (
        <div>
          <Link to={`/${props.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w300${props.src}`}
              alt={props.title}
            />
          </Link>
        </div>
      )
      }
    </Section>
  );
};
