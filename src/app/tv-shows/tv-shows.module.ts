import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { TvShowsRoutingModule } from './tv-shows.routing.module';

@NgModule({
  declarations: [DetailsComponent],
  imports: [CommonModule, TvShowsRoutingModule, SharedModule],
})
export class TvShowsModule {}
