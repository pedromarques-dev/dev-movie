import React from "react";
import { Box, Image } from "@chakra-ui/react";

export const Loading: React.FC = () => {
  return (
    <Box
      bg="#000000"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src="./assets/images/loading.svg" alt="Loading" w="10%" />
    </Box>
  );
};
