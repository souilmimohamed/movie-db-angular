import { createFeatureSelector } from '@ngrx/store';
import { genre } from 'src/app/models/main.models';

export const selectGenres = createFeatureSelector<genre[]>('mygenres');
