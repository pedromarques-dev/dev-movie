import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { propsResults } from "../../interfaces";

export const MoviesResults = (props: propsResults) => {
  return (
    <Box color='white'>
      {props.src && (
        <Box textAlign='center' position='relative'>
          <Link to={`/${props.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${props.src}`}
              alt={props.title}
              w='250px'
              h='300px'
              transition='0.3 ease-in-out'
              _hover={{
                transform: 'translateY(-30px)'
              }}
            />
             <Box
                  position="absolute"
                  bottom="0"
                  color="white"
                  bg="#111111"
                  w="100%"
                  p='10px'
                  boxShadow="rgba(0,0,0,0.2)"
                >
                  <Text
                    noOfLines={1}
                  >{props.title}</Text>
                </Box>
          </Link>
        </Box>
      )
      }
    </Box>
  );
};


