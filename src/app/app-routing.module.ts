import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movie',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'tvshow',
    loadChildren: () =>
      import('./tv-shows/tv-shows.module').then((m) => m.TvShowsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
