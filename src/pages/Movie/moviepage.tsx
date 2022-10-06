import * as React from "react";
import { Text } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Header, Loading, MovieDetails } from "../../components";
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
      {store.loader && <Loading />}
      {store.movieDetails ? (
        <MovieDetails movieDetails={store.movieDetails} />
      ) : (
        <Text fontSize='25px'>Filme nao encontrado!</Text>
      )}
    </>
  );
};

export default observer(MoviePage);
