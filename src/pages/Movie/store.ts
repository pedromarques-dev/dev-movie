import { makeAutoObservable } from "mobx";
import { IMovieDetails } from "../../interfaces";
import { loadDetailsMovie } from "../../services/tmdb";

export class Store {
  constructor() {
    makeAutoObservable(this);
  }

  public loader: boolean = false;
  public movieDetails: IMovieDetails | null = null;

  public setMovieDetails = (movieDetails: IMovieDetails) => {
      this.movieDetails = movieDetails
  }

  public setLoading = (loading: boolean) => {
    this.loader = loading;
  }

  public fetch = async (id: string) => {
    this.setLoading(true)

    try {
        const movieDetails = await loadDetailsMovie(id)
        this.setMovieDetails(movieDetails)
    } catch (e){
        console.error(e)
    } finally {
      this.setLoading(false)
    }
  };
}
