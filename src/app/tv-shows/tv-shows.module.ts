import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { TvShowsRoutingModule } from './tv-shows.routing.module';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, TvShowsRoutingModule, FormsModule],
})
export class TvShowsModule {}
