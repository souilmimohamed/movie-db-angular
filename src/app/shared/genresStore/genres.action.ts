import { createAction, props } from '@ngrx/store';
import { genre } from 'src/app/models/main.models';

export const InvokeGenresAPI = createAction(
  '[Genres API] invoke genres api',
  props<{ _type: string }>()
);

export const FetchGenresAPISuccess = createAction(
  '[Genres API] fetch genres API success',
  props<{ genres: genre[] }>()
);
