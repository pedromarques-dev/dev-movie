import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import useImageColor from "use-image-color";
import {
  Box,
  Image,
  Text,
  Grid,
  Button,
} from "@chakra-ui/react";
import { IMovieDetails } from "../../interfaces";
import { GenreList, Overview } from "../index";

interface IProps {
  movieDetails: IMovieDetails;
}

export const MovieDetails: React.FC<IProps> = observer((props) => {
  const { colors } = useImageColor(
    `https://image.tmdb.org/t/p/w300${props.movieDetails.poster_path}`,
    { cors: true, colors: 5 }
  );
  const { movieDetails } = props;

  return (
    <>
      {colors && (
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "2fr 1fr",
          }}
          templateRows="1fr"
          bgGradient={`linear(38deg, transparent, transparent, ${colors[3]}, ${colors[3]}, ${colors[0]}, ${colors[0]}, ${colors[3]}, ${colors[3]},  transparent, transparent )`}
          w="full"
          p={{
            md: "15px",
            lg: "35px",
          }}
          textAlign={{
            base: "center",
            md: "inherit",
          }}  
          minH="90.5vh"
        >
          <Box pt='125px' color="#111" >
            <Text fontSize="25px" m="15px" >
              {movieDetails.title}
            </Text>
            <GenreList movieDetails={movieDetails} />
            <Overview overview={movieDetails.overview} />
            <Link to="/"> 
              <Button 
                w={40}
                variant="outline"
                mt={5}
              >
                Voltar
              </Button>
            </Link>
          </Box>

          <Box
            w={{
              base: "100%",
              md: "300px",
              xl: "400px",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt="Cartaz do filme"
              filter="brightness(80%)"
              ml={{
                base: "0",
                md: "18px",
              }}
              w={{
                base: "100%",
                md: "90%",
                lg: "100%",
              }}
              p={{
                base: "30px",
                lg: "50px",
              }}
            />
          </Box>
        </Grid>
      )}
    </>
  );
});
