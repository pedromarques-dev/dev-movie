import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { ICategory } from "../../interfaces";
import { Movies } from "../Movies";

interface IProps {
  scrollMovie: ICategory[];
}

export const MoviesSection: React.FC<IProps> = observer((props) => {
  const { scrollMovie } = props;

  return (
      <Box bg="#000000" mt='10px'>
        {scrollMovie.map((category: ICategory, index: number) => (
          <Box key={index}>
            <Movies title={category.title} elements={category.elements} />
          </Box>
        ))}
      </Box>
  );
});

