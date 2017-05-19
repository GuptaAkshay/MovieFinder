import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popular_list: Observable<Object>;
  genres : Observable<Object>;
  
  constructor(private movieServ: MoviesService) { }

  getPopular(): void{
    this.movieServ.getPopularMovies().subscribe(res => {
     this.popular_list = res.results;
     //console.log(this.popular_list);
    });
  }
  ngOnInit() {
      this.getPopular();
  }

}
