import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, FormsModule],
})
export class TvShowsModule {}
