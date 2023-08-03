import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tvShow } from 'src/app/models/main.models';

@Component({
  selector: 'app-tvshows-list',
  templateUrl: './tvshows-list.component.html',
  styleUrls: ['./tvshows-list.component.scss'],
})
export class TvshowsListComponent implements OnInit {
  constructor() {}
  @Input() list: Observable<tvShow[]>;
  @Output() scroll: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}
  onScroll() {
    this.scroll.emit();
  }
}
