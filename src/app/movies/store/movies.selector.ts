import { createFeatureSelector } from '@ngrx/store';
import { movie } from 'src/app/models/main.models';

export const selectMovies = createFeatureSelector<movie[]>('mymovies');
