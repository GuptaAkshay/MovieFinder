import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './movies.service';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDisplayComponent,
    PopularMoviesComponent,
    NowPlayingComponent,
    TopRatedMoviesComponent,
    SearchMoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
