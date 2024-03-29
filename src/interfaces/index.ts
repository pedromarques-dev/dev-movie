export interface IMovieResults {
  id: number;
  title: string;
  poster_path: string;
}

export interface IButton {
  pagination: number;
  backPagination: React.MouseEventHandler<HTMLButtonElement>
  nextPagination: React.MouseEventHandler<HTMLButtonElement>
}


export interface IInput {
  type: string;
  placeholder: string;
  search?: {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onClick: React.MouseEventHandler<HTMLButtonElement>
  } 
}


export interface ICategory {
  title: string;
  elements: {
    results: [
      {
        id: number;
        title: string;
        poster_path: string;
      }
    ];
  };
}

export interface IScrollMovie {
  id: number;
  title: string;
  poster_path: string;  
}

export interface IPropsResults {
  id: number;
  title: string;
  src: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMovieDetails {
  title: string;
  poster_path: string;
  overview: string;
  genres: IGenre[];
}

