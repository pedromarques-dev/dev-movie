import { Text } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import * as React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import MovieDetails from "../../components/MovieDetails";
import { Store } from "./store";

const MoviePage = () => {
  const store = useLocalObservable(() => new Store());
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      store.fetch(id);
    }
  }, [store, id]);

  return (
    <>
      <Header  />
      {store.movieDetails ? (
        <MovieDetails movieDetails={store.movieDetails} />
      ) : (
        <Text fontSize='25px'>Filme nao encontrado!</Text>
      )}
    </>
  );
};

export default observer(MoviePage);
