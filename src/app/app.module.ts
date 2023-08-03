import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { appReducer } from './shared/store/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { loadingReducer } from './shared/loaderStore/loader.reducer';
import { MoviesEffect } from './movies/store/movies.effect';
import { moviesReducer } from './movies/store/movies.reducer';
import { tvshowsReducer } from './tv-shows/store/tv-shows.reducer';
import { TvShowsEffect } from './tv-shows/store/tv-shows.effect';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      appState: appReducer,
      loading: loadingReducer,
    }),
    StoreModule.forFeature('mymovies', moviesReducer),
    StoreModule.forFeature('myshows', tvshowsReducer),
    EffectsModule.forRoot([MoviesEffect, TvShowsEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circle,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#000000',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
