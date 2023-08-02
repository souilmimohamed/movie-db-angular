import { createReducer, on } from '@ngrx/store';
import { SetLoading } from './loader.action';
export const initialState: Readonly<boolean> = false;

export const loadingReducer = createReducer(
  initialState,
  on(SetLoading, (state, { isLoading }) => {
    return isLoading;
  })
);
