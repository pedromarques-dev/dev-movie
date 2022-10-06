import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { IPropsResults } from "../../interfaces";

export const MoviesResults: React.FC<IPropsResults> = observer((props) => {
  const { id, src, title } = props;

  return (
    <Box color='white'>
      {src && (
        <Box textAlign='center' position='relative'>
          <Link to={`/${id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w300${src}`}
              alt={title}
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
                  >{title}</Text>
                </Box>
          </Link>
        </Box>
      )
      }
    </Box>
  );
});


