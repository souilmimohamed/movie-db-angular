import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './store/movies.reducer';
import { MoviesEffect } from './store/movies.effect';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies.routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';
import { DetailsComponent } from './details/details.component';
import { CastMemberCardComponent } from '../shared/components/cast-member-card/cast-member-card.component';
import { ChipComponent } from '../shared/components/chip/chip.component';
import { ProdCompanyCardComponent } from '../shared/components/prod-company-card/prod-company-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    HomeComponent,
    MovieCardComponent,
    DetailsComponent,
    CastMemberCardComponent,
    ChipComponent,
    ProdCompanyCardComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    StoreModule.forFeature('mymovies', moviesReducer),
    EffectsModule.forFeature([MoviesEffect]),
    FormsModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: 'pulse',
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        height: '360px',
      },
    }),
  ],
})
export class MoviesModule {}
