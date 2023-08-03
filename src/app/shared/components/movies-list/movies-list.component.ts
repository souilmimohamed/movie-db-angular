import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { movie } from 'src/app/models/main.models';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor() {}
  @Input() list: Observable<movie[]>;
  @Output() scroll: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}
  onScroll() {
    this.scroll.emit();
  }
}
