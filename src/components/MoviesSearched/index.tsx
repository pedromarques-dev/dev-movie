import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { IMovieResults } from "../../interfaces";
import { MoviesResults } from "../MovieResults";

interface IProps {
  movieResults: IMovieResults[];
}

const MoviesSearched: React.FC<IProps> = (props) => {
  return (
    <Box mt='90px' display='flex' flexWrap='wrap' justifyContent='center'>
      {props.movieResults.map((movie: IMovieResults) => {
        return (
          <MoviesResults
            title={movie.title}
            key={movie.id}
            src={movie.poster_path}
            id={movie.id}
          />
        );
      })}
    </Box>
  );
};

export default observer(MoviesSearched);
