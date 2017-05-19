import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  apikey: string;
  base_url

  constructor(private http: Http) {
    this.apikey = 'fb7dacf5ffdbcb585f46d84f9a16c19c';
    this.base_url = 'https://api.themoviedb.org/3/discover/movie'
  }

  getPopularMovies() {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('api_key', this.apikey);
    params.set('sort_by', 'popularity.desc');
    params.set('include_video', 'false');
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false')
      .map(resp => resp.json());
  }
  
  getTopRatedMovies() {     
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&page=1')
      .map(resp => resp.json());
  }
  getNowPlayingMovies() {    
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US&page=1')
      .map(resp => resp.json());
  }
  getGenre() {    
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fb7dacf5ffdbcb585f46d84f9a16c19c&language=en-US')
      .map(resp => resp.json());
  }

}
