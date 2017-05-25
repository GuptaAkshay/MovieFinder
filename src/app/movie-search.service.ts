import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieSearchService{

  constructor(private http: Http) {}

  search(term: string): Observable<Object[]> {

    return this.http.get(`app/heroes/?name=${term}`)
      .map(response => response.json().data as Object[]);
  }
}




