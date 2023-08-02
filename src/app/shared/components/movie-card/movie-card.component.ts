import { Component, Input, OnInit } from '@angular/core';
import { movie } from 'src/app/models/main.models';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  imagePath = '';
  formattedDate = '';
  truncatedTitle = '';
  constructor() {}
  @Input() movie: movie;
  ngOnInit(): void {
    this.imagePath = this.movie.poster_path
      ? environment.imgApi + this.movie.poster_path
      : './img-01.jpeg';
    this.formattedDate = this.movie?.release_date || 'No release date';
    this.truncatedTitle =
      this.movie && this.movie.title && this.movie.title.length > 15
        ? this.movie?.title.slice(0, 15) + '...'
        : this.movie?.title;
  }
}
