import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  popularList: Array<Object>;
  
  constructor(private movieServ: MoviesService) { }

  getPopular(): void{
    //this.movieServ.getPopularMovies().subscribe(res => this.popularList = res.results;)
    console.log(this.movieServ.getPopularMovies().subscribe());
  }
  ngOnInit() {
      this.getPopular();    
  }

}
