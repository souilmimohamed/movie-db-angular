import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { castMember, tvShow } from 'src/app/models/main.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  model: tvShow = {
    backdrop_path: '',
    genres: [],
    id: 0,
    overview: '',
    poster_path: '',
    production_companies: [],
    first_air_date: '',
    name: '',
    number_of_seasons: 0,
  };
  director: castMember;
  producers: castMember[] = [];
  cast: castMember[] = [];
  backDrop: string;
  scrollAmount = 100;
  @ViewChild('content', { static: false }) content: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private appservice: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = parseInt(String(params.get('id')));
        return this.appservice.getById(id, 'tv');
      })
    );
    let fetchCrew$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = parseInt(String(params.get('id')));
        return this.appservice.getCast(id, 'tv');
      })
    );
    fetchData$.subscribe((data) => {
      if (data) {
        this.model = data;
        this.backDrop = `${environment.imgApi}${this.model.backdrop_path}`;
      } else this.router.navigate(['/']);
    });
    fetchCrew$.subscribe((data) => {
      if (data) {
        this.cast = data.cast;
        this.director = data.crew.filter(
          (item: castMember) => item.job === 'Director'
        )[0]?.name;
        this.producers = data.crew
          .filter((item: castMember) => item.job === 'Producer')
          .map((p: castMember) => p.name)
          .join(' , ');
      }
    });
  }
  timeConvert(n: number) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  }
  scrollLeft() {
    this.content.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.content.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }
}
