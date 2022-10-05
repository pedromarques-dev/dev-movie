import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Search, { IProps as SearchProps } from "../Search";

interface IProps {
  searchProps?: SearchProps;
}

export const Header = (props: IProps) => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent={{
        base: "center",
        md: "space-between",
      }}
      alignItems="center"
      flexWrap="wrap"
      bg="#161515"
      p="10px"
    >
      <Box>
        <Link to="/">
          <Text fontSize="40px" color="#c22b2bca" p="5px">
            Dev Movie
          </Text>
        </Link>
      </Box>

      {props.searchProps && (
        <Search
          type={props.searchProps.type}
          placeholder="Buscar filmes..."
          value={props.searchProps.value}
          onChange={props.searchProps.onChange}
        />
      )}
    </Box>
  );
};
