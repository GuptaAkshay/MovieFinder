import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-now-playing',
	templateUrl: './now-playing.component.html',
	styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
	
	panetitle: string
	now_playing: Observable<Object>;

	constructor(private movie_serv: MoviesService, private router:Router) {

		this.panetitle = "Now Playing";
    }

	getNowPlaying(): void {
		this.movie_serv.getNowPlayingMovies().subscribe(res => {
			this.now_playing = res.results;
		});
	}

	ngOnInit() {
		this.getNowPlaying();
	}

	displayMovies(): void{
		this.movie_serv.displayMoviesService(this.now_playing, this.panetitle);
		this.router.navigate(["/detail"]);
	}


}
