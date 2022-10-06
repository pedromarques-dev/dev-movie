import * as React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { IGenre, IMovieDetails } from "../../interfaces";

interface IProps {
  movieDetails: IMovieDetails;
}

export const GenreList: React.FC<IProps> = observer((props: IProps) => {
  return (
    <List
      display="flex"
      justifyContent={{
        base: "center",
        md: "left",
      }}
      flexDirection={{
        base: "column",
        md: "row",
      }}
      m="10px 0"
    >
      {props.movieDetails.genres.map((genre: IGenre) => (
        <ListItem ml="15px" key={genre.id}>
          {genre.name}
        </ListItem>
      ))}
    </List>
  );
});

