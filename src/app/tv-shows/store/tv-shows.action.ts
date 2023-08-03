import { createAction, props } from '@ngrx/store';
import { searchParams, tvShow } from 'src/app/models/main.models';

export const InvokeTvShowsAPI = createAction(
  '[TvShows API] invoke tvshows api',
  props<{ searchParams: searchParams }>()
);

export const FetchTvShowsAPISuccess = createAction(
  '[TvShows API] fetch tvshows API success',
  props<{ shows: tvShow[]; isSearch: boolean }>()
);
