import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/app.state';
import { FetchMoviesAPISuccess, InvokeMoviesAPI } from './movies.action';
import { map, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { MoviesService } from '../movies.service';
import { SetLoading } from 'src/app/shared/loaderStore/loader.action';

@Injectable()
export class MoviesEffect {
  constructor(
    private actions$: Actions,
    private appStore: Store<Appstate>,
    private moviesservice: MoviesService,
    private loadingStore: Store
  ) {}

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvokeMoviesAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: [], apiStatus: '' } })
        );
        this.setLoadingState(true);
        return this.moviesservice.getMovies(action.searchParams).pipe(
          map((data) => {
            if (data) {
              this.appStore.dispatch(
                setAPIStatus({
                  apiStatus: { apiResponseMessage: [], apiStatus: 'success' },
                })
              );
              this.setLoadingState(false);
              return FetchMoviesAPISuccess({
                movies: data.results,
                isSearch: action.searchParams.isSearch,
              });
            } else {
              this.appStore.dispatch(
                setAPIStatus({
                  apiStatus: {
                    apiResponseMessage: ['Error in fetching Data'],
                    apiStatus: 'failure',
                  },
                })
              );
              this.setLoadingState(false);
              return FetchMoviesAPISuccess({
                movies: [],
                isSearch: action.searchParams.isSearch,
              });
            }
          })
        );
      })
    );
  });
  setLoadingState(state: boolean) {
    this.loadingStore.dispatch(SetLoading({ isLoading: state }));
  }
}
