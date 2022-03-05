import { Link } from "react-router-dom";
import { propsResults } from "../../interfaces";
import { Section } from "./styles";

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
