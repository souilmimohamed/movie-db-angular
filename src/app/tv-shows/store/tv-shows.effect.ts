import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Appstate } from 'src/app/shared/store/app.state';
import { map, switchMap } from 'rxjs';
import { setAPIStatus } from 'src/app/shared/store/app.action';
import { AppService } from 'src/app/app.service';
import { SetLoading } from 'src/app/shared/loaderStore/loader.action';
import { FetchTvShowsAPISuccess, InvokeTvShowsAPI } from './tv-shows.action';

@Injectable()
export class TvShowsEffect {
  constructor(
    private actions$: Actions,
    private appStore: Store<Appstate>,
    private appservice: AppService,
    private loadingStore: Store
  ) {}

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvokeTvShowsAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: [], apiStatus: '' } })
        );
        this.setLoadingState(true);
        return this.appservice.getMovies(action.searchParams).pipe(
          map((data) => {
            if (data) {
              this.appStore.dispatch(
                setAPIStatus({
                  apiStatus: { apiResponseMessage: [], apiStatus: 'success' },
                })
              );
              this.setLoadingState(false);
              return FetchTvShowsAPISuccess({
                shows: data.results,
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
              return FetchTvShowsAPISuccess({
                shows: [],
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
