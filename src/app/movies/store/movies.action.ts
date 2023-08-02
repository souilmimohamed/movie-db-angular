import { createAction, props } from '@ngrx/store';
import { movie, searchParams } from 'src/app/models/main.models';

export const InvokeMoviesAPI = createAction(
  '[Movie API] invoke movies api',
  props<{ searchParams: searchParams }>()
);

export const FetchMoviesAPISuccess = createAction(
  '[Movie API] fetch movie API success',
  props<{ movies: movie[]; isSearch: boolean }>()
);
