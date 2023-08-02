import { createReducer, on } from '@ngrx/store';
import { genre } from 'src/app/models/main.models';
import { FetchGenresAPISuccess } from './genres.action';

export interface genresState {
  movies: genre[];
}

export const initialState: ReadonlyArray<genre> = [];

export const genresReducer = createReducer(
  initialState,
  on(FetchGenresAPISuccess, (state, { genres }) => {
    return [...genres];
  })
);
