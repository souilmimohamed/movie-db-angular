import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { searchParams } from './models/main.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  getMovies(searchParams: searchParams) {
    const _genres =
      searchParams && searchParams.genres && searchParams.genres.length > 0
        ? `?with_genres=${searchParams.genres.map((g) => g.id).join('|')}&`
        : `?`;
    const url =
      searchParams && searchParams.searchText
        ? `https://api.themoviedb.org/3/search/${searchParams.type}${_genres}api_key=${environment.apiKey}&query=${searchParams.searchText}&page=${searchParams.page}`
        : `https://api.themoviedb.org/3/discover/${searchParams.type}${_genres}sort_by=popularity.desc&api_key=${environment.apiKey}&page=${searchParams.page}`;
    return this.http.get<any>(url);
  }
  getById(id: number, type: string) {
    console.log(type);
    return this.http.get<any>(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${environment.apiKey}`
    );
  }
  getCast(id: number, type: string) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${environment.apiKey}`
    );
  }
  getGenres(type: string) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${environment.apiKey}`
    );
  }
}
