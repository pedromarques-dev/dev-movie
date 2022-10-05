import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box } from "@chakra-ui/react";
import { Store } from "./store";
import MoviesSearched from "../../components/MoviesSearched";
import MoviesSection from "../../components/MoviesSection";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Buttons } from "../../components/Button";

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
        }}
      />
      {store.moviesSearched.length > 0 ? (
        store.loadingForSearched ? <Loading /> : <MoviesSearched movieResults={store.moviesSearched} />
      ) : (
        <Box mt='90px'>
          <Box
            bg="#000"
            display="flex"
            justifyContent="right"
            px='15px'
          >
            <Buttons
              pagination={store.pagination}
              backPagination={store.backPagination}
              nextPagination={store.nextPagination}
            />
          </Box>
         { store.loading ? <Loading /> : <MoviesSection scrollMovie={store.moviesList} /> }
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
