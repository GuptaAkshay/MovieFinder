import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  movieDetailList: Observable<Object>;
  movie: Object;
  cast: Object;
  pagetitle: string;
  pageFlag: boolean;

  constructor(
    private movieServ: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if (params['id']) {
        this.populateMovie(params['id']);
      } else {
        this.populateMoviesList();
        // console.log('id not found in params')

      }
    });
  }

  populateMoviesList() {
    this.pageFlag = true;
    this.pagetitle = this.movieServ.getMoviesService().pagetitle;
    this.movieDetailList = this.movieServ.getMoviesService().movieList;
  }

  populateMovie(movie_id: number) {

    this.pagetitle = 'Movie Details';
    this.movieServ.getMovie(movie_id).subscribe(res => {
      this.movie = res;
    });
    this.movieServ.getCastForMovie(movie_id).subscribe(res => {
      this.cast = res.cast;
    });
  }

  gotoDetail(movie_id: number): void {

    // console.log(movie_id);
    // this.router.navigate(['/detail'], {queryParams : {id: movie_id}});
    this.router.navigate(['/detail', movie_id]);

  }
}
