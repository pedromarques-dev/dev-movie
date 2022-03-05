export interface IMovieResults {
  id: number;
  title: string;
  poster_path: string;
}

export interface ICategory {
  title: string;
  elements: {
    results: [
      {
        poster_path: string;
      }
    ];
  };
}

export interface IScrollMovie {
  title: string;
  elements: {
    results: [
      {
        poster_path: string;
      }
    ];
  };
}

export interface propsResults {
  id: number;
  title: string;
  src: string;
}

export interface IGenre {
  id?: number;
  name: string;
}

export interface IMovieDetails {
  title: string;
  image: string;
  description: string;
  genres: IGenre[];
}
