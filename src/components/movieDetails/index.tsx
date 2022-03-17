import { observer } from "mobx-react-lite";
import { IMovieDetails } from "../../interfaces";
import useImageColor from "use-image-color";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import GenreList from "../ListOfGenres";
import Overview from "../Overview";

interface IProps {
  movieDetails: IMovieDetails;
}

const MovieDetails = (props: IProps) => {
  const { colors } = useImageColor(
    `https://image.tmdb.org/t/p/w300${props.movieDetails.poster_path}`,
    { cors: true, colors: 5 }
  );

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
          mt="90px"
          minH="88vh"
        >
          <Box pt='125px' color="#111" >
            <Text fontSize="25px" m="15px" >
              {props.movieDetails.title}
            </Text>
            <GenreList movieDetails={props.movieDetails} />
            <Overview overview={props.movieDetails.overview} />
          </Box>

          <Box
            w={{
              base: "100%",
              md: "300px",
              xl: "400px",
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`}
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
};

export default observer(MovieDetails);
