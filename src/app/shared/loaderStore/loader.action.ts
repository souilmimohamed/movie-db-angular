import { createAction, props } from '@ngrx/store';

export const SetLoading = createAction(
  '[Loading] set loading',
  props<{ isLoading: boolean }>()
);
