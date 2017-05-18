import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
  apikey: string;
  base_url
  
  constructor(private jsonp: Jsonp) { 
    this.apikey = 'fb7dacf5ffdbcb585f46d84f9a16c19c';
    this.base_url = 'http://api.themoviedb.org/3/discover/movie'
  }
  
  getPopularMovies() {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('api_key', this.apikey);
    params.set('sort_by','popularity.desc');
    params.set('include_video','false');
    console.log({search: params});
    return this.jsonp.get(this.base_url,{search: params})
      .map(res=> res.json().data);
  }

}
