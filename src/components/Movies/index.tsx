// import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ICategory, IScrollMovie } from "../../interfaces";

export const Movies: React.FC<ICategory> = observer((props) => {
  const { elements, title } = props;
  return (
    <Box mx={4}>
      <Text 
        fontSize="3xl" 
        color="white" 
        py="15px"
        px={3}
      >
        {title}
      </Text>
      <Flex 
        w='100%' 
        flexWrap='wrap' 
        justifyContent="center"
        mt={7}
      >
        {elements.results.map((movie: IScrollMovie) => {
          return (
            <Link key={movie.id} to={`/${movie.id}`} >
              <Box position="relative" textAlign="center" w='100%' minWidth='310px' minHeight='450px' h='100%' >
                <Box 
                  bgImage={`url(https://image.tmdb.org/t/p/w300${movie.poster_path})`}
                  bgSize='cover' 
                  w='100%'
                  h='100%'
                  transition= '0.3s ease-in-out'
                  _hover={{transform: 'translateY(-50px)'}}
                  mt='10px'  
                >
                
                </Box>
                <Box
                  position="absolute"
                  bottom="0"
                  color="white"
                  bg="rgba(0,0,0,0.4)"
                  w="100%"
                  p='10px'
                >
                  <Text noOfLines={1}>{movie.title}</Text>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
});
