import { NgModule } from '@angular/core';
import { ProdCompanyCardComponent } from './components/prod-company-card/prod-company-card.component';
import { CastMemberCardComponent } from './components/cast-member-card/cast-member-card.component';
import { ChipComponent } from './components/chip/chip.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { TvshowsListComponent } from './components/tvshows-list/tvshows-list.component';
import { TvshowCardComponent } from './components/tvshow-card/tvshow-card.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const components = [
  ProdCompanyCardComponent,
  CastMemberCardComponent,
  ChipComponent,
  MoviesListComponent,
  TvshowsListComponent,
  TvshowCardComponent,
  MovieCardComponent,
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [...components],
})
export class SharedModule {}
