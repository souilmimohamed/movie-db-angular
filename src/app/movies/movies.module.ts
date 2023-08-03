import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { moviesReducer } from './store/movies.reducer';
import { MoviesEffect } from './store/movies.effect';
import { FormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies.routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, SharedModule, MoviesRoutingModule, FormsModule],
})
export class MoviesModule {}
