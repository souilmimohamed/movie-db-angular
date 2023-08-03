import { createFeatureSelector } from '@ngrx/store';
import { tvShow } from 'src/app/models/main.models';

export const selectTvShows = createFeatureSelector<tvShow[]>('myshows');
