import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { genre, searchParams } from 'src/app/models/main.models';
import { selectMovies } from '../movies/store/movies.selector';
import { InvokeMoviesAPI } from '../movies/store/movies.action';
import { selectTvShows } from '../tv-shows/store/tv-shows.selector';
import { InvokeTvShowsAPI } from '../tv-shows/store/tv-shows.action';
import { AppService } from '../app.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchModel: searchParams = {
    genres: [],
    isSearch: false,
    page: 1,
    searchText: '',
    type: 'movie',
  };
  requestedPage = 1;
  searchText: string;
  movies$ = this.store.pipe(select(selectMovies));
  tvshows$ = this.store.pipe(select(selectTvShows));
  genres: genre[] = [];
  selectedOption: string | null = null;
  type: string = 'movie';
  constructor(private store: Store, private appservice: AppService) {}
  ngOnInit(): void {
    this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    this.store.dispatch(
      InvokeTvShowsAPI({ searchParams: { ...this.searchModel, type: 'tv' } })
    );
    this.getGenres();
  }
  onScroll(): void {
    this.searchModel = {
      ...this.searchModel,
      page: this.requestedPage + 1,
      isSearch: false,
      type: this.type,
    };
    this.runSearch();
    this.requestedPage++;
  }
  onSearch() {
    this.searchModel = {
      ...this.searchModel,
      ...this.searchModel,
      type: this.type,
      isSearch: true,
      page: 1,
    };
    this.runSearch();
  }
  setSelected(event: any) {
    setTimeout(() => {
      this.selectedOption = null;
    });
    const id = event.target.value;
    const name = event.target[event.target.selectedIndex].text;

    const _selected = this.searchModel.genres.filter(
      (item) => item.id === id
    )[0];
    if (!_selected) {
      this.searchModel = {
        ...this.searchModel,
        isSearch: true,
        page: 1,
        genres: [...this.searchModel.genres, { id, name }],
        type: this.type,
      };
      this.runSearch();
    }
  }
  closeSelected(id: number) {
    let filtred = this.searchModel.genres.filter((item) => item.id !== id);
    this.searchModel = {
      ...this.searchModel,
      type: this.type,
      isSearch: true,
      page: 1,
      genres: filtred,
    };
    this.runSearch();
  }
  switchType(type: string) {
    this.type = type;
    this.resetModel();
    this.runSearch();
    this.getGenres();
  }
  runSearch() {
    if (this.type === 'movie')
      this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    else
      this.store.dispatch(InvokeTvShowsAPI({ searchParams: this.searchModel }));
  }
  resetModel() {
    this.searchModel = {
      searchText: '',
      isSearch: false,
      page: 1,
      genres: [],
      type: this.type,
    };
  }
  getGenres() {
    this.appservice
      .getGenres(this.type)
      .pipe(take(1))
      .subscribe((result) => {
        if (result) this.genres = result.genres;
      });
  }
  setText(event: any) {
    this.searchModel = { ...this.searchModel, searchText: event };
  }
}
