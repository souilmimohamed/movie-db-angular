import { movie, searchParams } from 'src/app/models/main.models';
import { createReducer, on } from '@ngrx/store';
import { FetchMoviesAPISuccess, MoviesSearchSuccess } from './movies.action';

export interface moviesState {
  movies: movie[];
}

export const initialState: ReadonlyArray<movie> = [];

export const moviesReducer = createReducer(
  initialState,
  on(FetchMoviesAPISuccess, (state, { movies, isSearch }) => {
    if (isSearch) {
      return [...movies];
    } else {
      return [...state, ...movies];
    }
  }),
  on(MoviesSearchSuccess, (state, { movies }) => {
    return [...movies];
  })
);
