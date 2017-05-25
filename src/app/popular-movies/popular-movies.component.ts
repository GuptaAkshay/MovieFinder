import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-popular-movies',
	templateUrl: './popular-movies.component.html',
	styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

	panetitle: string;
	popular_list: Observable<Object>;
	genres: Observable<Object>;

	constructor(private movieServ: MoviesService, private router:Router) { 
		
		this.panetitle="Popular Movies"; 
	}

	getPopular(): void {
		this.movieServ.getPopularMovies().subscribe(res => {
			this.popular_list = res.results;
			//console.log(this.popular_list);
		});
	}
	ngOnInit() {
		this.getPopular();
	}

	displayMovies(): void{
		this.movieServ.displayMoviesService(this.popular_list, this.panetitle);
		this.router.navigate(["/detail"]);
	}

	gotoDetail(movie_id: number) : void{
		
		//console.log(movie_id);
		//this.router.navigate(['/detail'], {queryParams : {id: movie_id}});
		this.router.navigate(['/detail', movie_id]);
			
	}
}
