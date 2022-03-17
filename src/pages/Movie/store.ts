import { makeAutoObservable } from "mobx";
import { IMovieDetails } from "../../interfaces";
import { loadDetailsMovie } from "../../services/tmdb";

export class Store {
  constructor() {
    makeAutoObservable(this);
  }

  public movieDetails: IMovieDetails | null = null;

  public setMovieDetails = (movieDetails: IMovieDetails) => {
      this.movieDetails = movieDetails
  }

  public fetch = async (id: string) => {
    try {
        const movieDetails = await loadDetailsMovie(id)
        this.setMovieDetails(movieDetails)
    } catch (e){
        console.error(e)
    }
  };
}
