import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-movie-detail',
	templateUrl: './movie-detail.component.html',
	styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

	movieDetailList : Observable<Object>;
	pagetitle: string
	
	constructor(private movieServ: MoviesService) { }

	ngOnInit() {
		
		this.pagetitle = this.movieServ.getMoviesService().pagetitle;
		this.movieDetailList = this.movieServ.getMoviesService().movieList;
	}

}
