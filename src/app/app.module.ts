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
import { genresReducer } from './shared/genresStore/genres.reducer';
import { GenresEffect } from './shared/genresStore/genres.effects';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { HomeComponent } from './tv-shows/home/home.component';
@NgModule({
  declarations: [AppComponent, TvShowsComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      appState: appReducer,
      loading: loadingReducer,
      genres: genresReducer,
    }),
    StoreModule.forFeature('mygenres', genresReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([GenresEffect]),
    HttpClientModule,
    BrowserAnimationsModule,
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
