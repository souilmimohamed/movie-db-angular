import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/app.state';
import { MoviesService } from 'src/app/movies/movies.service';
import { FetchGenresAPISuccess, InvokeGenresAPI } from './genres.action';
import { map, switchMap } from 'rxjs';
import { setAPIStatus } from '../store/app.action';

@Injectable()
export class GenresEffect {
  constructor(
    private actions$: Actions,
    private appStore: Store<Appstate>,
    private moviesservice: MoviesService,
    private loadingStore: Store
  ) {}

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InvokeGenresAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: [], apiStatus: '' } })
        );
        return this.moviesservice.getGenres(action._type).pipe(
          map((data) => {
            if (data) {
              this.appStore.dispatch(
                setAPIStatus({
                  apiStatus: { apiResponseMessage: [], apiStatus: 'success' },
                })
              );
              return FetchGenresAPISuccess({
                genres: data.genres,
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
              return FetchGenresAPISuccess({
                genres: [],
              });
            }
          })
        );
      })
    );
  });
}
