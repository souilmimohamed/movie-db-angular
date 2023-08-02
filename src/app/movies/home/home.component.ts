import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { genre, searchParams } from 'src/app/models/main.models';
import { selectMovies } from '../store/movies.selector';
import { InvokeMoviesAPI } from '../store/movies.action';
import { selectGenres } from 'src/app/shared/genresStore/genres.selector';
import { InvokeGenresAPI } from 'src/app/shared/genresStore/genres.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
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
  genres$ = this.store.pipe(select(selectGenres));
  selectedGenres: genre[] = [];
  selectedOption: string | null;
  ngOnInit(): void {
    this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    this.store.dispatch(InvokeGenresAPI({ _type: 'movie' }));
  }
  onScroll(): void {
    this.searchModel = {
      ...this.searchModel,
      searchText: this.searchText,
      page: this.requestedPage + 1,
      isSearch: false,
    };
    this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    this.requestedPage++;
  }
  onSearch() {
    this.searchModel = {
      ...this.searchModel,
      searchText: this.searchText,
      isSearch: true,
      page: 1,
    };
    this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    this.searchModel.isSearch = false;
  }
  setSelected(event: any) {
    setTimeout(() => {
      this.selectedOption = null;
    });
    const id = event.target.value;
    const name = event.target[event.target.selectedIndex].text;
    this.genres$.subscribe((data) => {
      const _selected = this.selectedGenres.filter((item) => item.id === id)[0];
      if (!_selected) {
        this.selectedGenres.push({ id, name });
        this.searchModel = {
          ...this.searchModel,
          searchText: this.searchText,
          isSearch: true,
          page: 1,
          genres: this.selectedGenres.map((g) => g.id),
        };
        this.store.dispatch(
          InvokeMoviesAPI({ searchParams: this.searchModel })
        );
      }
    });
  }
  closeSelected(id: number) {
    this.selectedGenres = this.selectedGenres.filter((item) => {
      return item.id !== id;
    });
    this.searchModel = {
      ...this.searchModel,
      searchText: this.searchText,
      isSearch: true,
      page: 1,
      genres: this.selectedGenres.map((g) => g.id),
    };
    this.store.dispatch(InvokeMoviesAPI({ searchParams: this.searchModel }));
    this.searchModel.isSearch = false;
  }
}
