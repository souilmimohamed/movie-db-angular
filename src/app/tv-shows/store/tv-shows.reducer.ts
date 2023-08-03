import { movie, tvShow } from 'src/app/models/main.models';
import { createReducer, on } from '@ngrx/store';
import { FetchTvShowsAPISuccess } from './tv-shows.action';

export interface moviesState {
  shows: tvShow[];
}

export const initialState: ReadonlyArray<tvShow> = [];

export const tvshowsReducer = createReducer(
  initialState,
  on(FetchTvShowsAPISuccess, (state, { shows, isSearch }) => {
    if (isSearch) {
      return [...shows];
    } else {
      return [...state, ...shows];
    }
  })
);
