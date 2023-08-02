import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectLoadingState } from './shared/loaderStore/loader.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean;
  loading$: Observable<boolean | null>;
  constructor(private loadingStore: Store) {
    this.loading$ = this.loadingStore.pipe(select(selectLoadingState));
  }
  ngOnInit(): void {}
}
