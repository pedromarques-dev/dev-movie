import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import MoviesSearched from "../../components/MoviesSearched";
import MoviesSection from "../../components/MoviesSection";
import { Store } from "./store";
import { Loading } from "../../components/Loading";
import { Buttons } from "../../components/Button";
import { Header } from "../../components/Header";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    store.fetch();
  }, [store]);

  return (
    <>
      <Header
        searchProps={{
          type: "search",
          placeholder: "Buscar filmes...",
          value: store.search,
          onChange: store.handleChange,
          onClick: store.handleClick,
        }}
      />
      {store.loading && <Loading />}

      {store.moviesSearched.length > 0 ? (
        <MoviesSearched movieResults={store.moviesSearched} />
      ) : (
        <Box mt='90px'>
          <Box
            bg="#000"
            display="flex"
            justifyContent="right"
            p='15px'
            
          >
            <Buttons
              pagination={store.pagination}
              backPagination={store.backPagination}
              nextPagination={store.nextPagination}
            />
          </Box>
          <MoviesSection scrollMovie={store.moviesList} />
          <Box
            bg="#111111"
            p="5px"
            display="flex"
            justifyContent="center"
            mt="20px"
            alignItems="center"
          >
            <Buttons
              pagination={store.pagination}
              backPagination={store.backPagination}
              nextPagination={store.nextPagination}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default observer(Home);
