import * as React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { IMovieResults } from "../../interfaces";
import { MoviesResults } from "../MovieResults";

interface IProps {
  movieResults: IMovieResults[];
}

export const MoviesSearched: React.FC<IProps> = observer((props) => {
  const { movieResults } = props;

  return (
    <Box mt='10px'>
      <Box textAlign="center" mb={10} mt={5}>
        <Button onClick={() => window.location.reload()}>Cancelar busca</Button>
      </Box>
      <Flex flexWrap='wrap' justifyContent='center'>
        {movieResults.map((movie: IMovieResults) => {
            return (
              <MoviesResults
                title={movie.title}
                key={movie.id}
                src={movie.poster_path}
                id={movie.id}
              />
            );
          })}
      </Flex>
    </Box>
  );
});

