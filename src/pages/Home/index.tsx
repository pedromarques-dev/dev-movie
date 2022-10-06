import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { MoviesSearched, Header, Loading, MovieInitialSection } from "../../components";

const Home = () => {
  const store = useLocalObservable(() => new Store());

  React.useEffect(() => {
    store.fetch();
  }, [store]);

  return (
    <>
      <Header
        searchProps={{
          value: store.search,
          onChange: store.handleChange,
        }}
      />
      {store.moviesSearched.length > 0 ? (
        store.loadingForSearched ? <Loading /> : <MoviesSearched movieResults={store.moviesSearched} />
      ) : (
       <MovieInitialSection
          buttonsCommands={{
            pagination: store.pagination,
            backPagination: store.backPagination,
            nextPagination: store.nextPagination,
          }}
          moviesList={store.moviesList}
          loading={store.loading}
        />
      )}
    </>
  );
};

export default observer(Home);
