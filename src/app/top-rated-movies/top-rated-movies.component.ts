import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  top_rated_movies: Observable<Object>;
  
  constructor(private movie_serv: MoviesService) { }

  getTopRated(): void{
    this.movie_serv.getTopRatedMovies().subscribe(res => {
      this.top_rated_movies = res.results;
      console.log(this.top_rated_movies);
    });
  }
  
  ngOnInit() {
    this.getTopRated();
  }

}
