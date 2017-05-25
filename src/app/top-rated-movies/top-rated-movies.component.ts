import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-top-rated-movies',
	templateUrl: './top-rated-movies.component.html',
	styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
	
	panetitle: string
	top_rated_movies: Observable<Object>;

	constructor(private movie_serv: MoviesService, private router:Router) {

		this.panetitle="Top Rated Movies";
	}

	getTopRated(): void {
		this.movie_serv.getTopRatedMovies().subscribe(res => {
			this.top_rated_movies = res.results;
			console.log(this.top_rated_movies);
		});
	}

	ngOnInit() {
		this.getTopRated();
	}

	displayMovies(): void{
		this.movie_serv.displayMoviesService(this.top_rated_movies, this.panetitle);
		this.router.navigate(["/detail"]);
	}

	gotoDetail(movie_id: number) : void{
		
		//console.log(movie_id);
		//this.router.navigate(['/detail'], {queryParams : {id: movie_id}});
		this.router.navigate(['/detail', movie_id]);			
	}
}
