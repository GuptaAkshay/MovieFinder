import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
	pagetitle: string;
	movieList: Observable<Object>;
	apikey: string;
	

	constructor(private http: Http) {
		this.apikey = 'fb7dacf5ffdbcb585f46d84f9a16c19c';		
	}

	getPopularMovies() {
		let uri = 'https://api.themoviedb.org/3/discover/movie';

		let parameters = {
			api_key: this.apikey,
			sort_by: 'popularity.desc',
			include_video: 'false'
		}
		//https://api.themoviedb.org/3/discover/movie?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&sort_by=popularity.desc&include_video=false
		return this.http.get(uri, { params: parameters })
			.map(resp => resp.json());
	}

	getTopRatedMovies() {
		let uri = 'https://api.themoviedb.org/3/movie/top_rated';

		let parameters = {
			api_key: this.apikey,
		}
		//'https://api.themoviedb.org/3/movie/top_rated?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&page=1'
		return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&page=1')
			.map(resp => resp.json());
	}

	getNowPlayingMovies() {
		let uri = 'https://api.themoviedb.org/3/movie/now_playing';
		let parameters = {
			api_key: this.apikey,
			include_video: 'false'
		};
		
		//'https://api.themoviedb.org/3/movie/now_playing?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&page=1'    
		return this.http.get(uri, { params: parameters })
			.map(resp => resp.json());
	}

	getGenre() {
		let uri = 'https://api.themoviedb.org/3/genre/movie/list';

		let parameters = {
			api_key: this.apikey,
		}

		return this.http.get(uri, { params: parameters })
			.map(resp => resp.json());
	}

	displayMoviesService(movList : Observable<Object>, pagetitle: string) {	
		this.pagetitle = pagetitle
		this.movieList = movList;	
		//console.log("displayMoviesService",this.movieList);
	}
	
	getMoviesService(){
		
		let movie_content = {
			pagetitle: this.pagetitle,
			movieList: this.movieList
		};
		
		//console.log("getMoviesService",this.movieList);
		return movie_content;
	}
}
