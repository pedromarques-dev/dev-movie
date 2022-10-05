import { makeAutoObservable } from "mobx";
import { getMovieList, loadMoviesSearched } from "../../services/tmdb";
import { ICategory, IMovieResults } from "../../interfaces";    

export class Store {
  constructor() {
    makeAutoObservable(this);
  }

  public moviesList: ICategory[] = [];
  public moviesSearched: IMovieResults[] = [];
  public search: string = "";
  public timingOfLoading: number = 2000; // 2 segundos
  public pagination: number = 1;
  public loading: boolean = false
  public loadingForSearched: boolean = false

  public handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.search = event.currentTarget.value;

    setTimeout(() => {
      this.fetchSearchedMovies();
    }, this.timingOfLoading);
  };

  public nextPagination = () => {
    if (this.pagination === 10) return;
    this.pagination++
    this.fetch()
  }

  public backPagination = () => {
    if (this.pagination === 1) return;
    this.pagination--
    this.fetch()
  }

  public setMoviesList = (movie: ICategory[]) =>  {
    this.moviesList = movie;
  }

  public setMoviesSearched = (movie: IMovieResults[]) => {
    this.moviesSearched = movie;
  }

  public setLoading = (loading: boolean) => {
      this.loading = loading
  }

  public setLoaderForSearched = (loading: boolean) => {
    this.loadingForSearched = loading
}

  public fetch = async () => {
    if(this.loading){
        return ;
    }

    this.setLoading(true)

    try {
      const movies = await getMovieList(this.pagination);
      this.setMoviesList(movies);
    } catch (e) {
      console.error(e);
    } finally {
        this.setLoading(false)
    }
  };

  public fetchSearchedMovies = async () => {
    if(this.loadingForSearched){
        return ;
    }

    this.setLoaderForSearched(true)

    try {
      if (!this.search) return ;

      const search = await loadMoviesSearched(this.search);
      this.setMoviesSearched(search.results);
    } catch (e) {
      console.error(e);
    } finally {
        this.setLoaderForSearched(false)
    }
  };
}
