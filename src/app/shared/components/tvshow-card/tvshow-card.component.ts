import { Component, Input, OnInit } from '@angular/core';
import { tvShow } from 'src/app/models/main.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tvshow-card',
  templateUrl: './tvshow-card.component.html',
  styleUrls: ['./tvshow-card.component.scss'],
})
export class TvshowCardComponent implements OnInit {
  imagePath = '';
  formattedDate = '';
  truncatedTitle = '';
  constructor() {}
  @Input() show: tvShow;
  ngOnInit(): void {
    this.imagePath = this.show.poster_path
      ? environment.imgApi + this.show.poster_path
      : './img-01.jpeg';
    this.formattedDate = this.show.first_air_date || 'No release date';
    this.truncatedTitle =
      this.show && this.show.name && this.show.name.length > 15
        ? this.show.name.slice(0, 15) + '...'
        : this.show.name;
  }
}
