// import { useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IScrollMovie } from "../../interfaces";
import { Box, Text, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const Movies = (props: ICategory) => {
  return (
    <Box>
      <Text fontSize="3xl" color="white" p="15px">
        {props.title}
      </Text>
      <Flex w='100%' flexWrap='wrap' flexGrow='3'>
        {props.elements.results.map((movie: IScrollMovie) => {
          return (
            <Link key={movie.id} to={`/${movie.id}`}>
              <Box position="relative" textAlign="center" w='100%' minWidth='300px' minHeight='450px' h='100%' flex='1' >
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
};

  export default observer(Movies)