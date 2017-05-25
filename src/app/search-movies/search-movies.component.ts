import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {MovieSearchService} from '../movie-search.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
  providers: [MovieSearchService]
})
export class SearchMoviesComponent implements OnInit {
  movies: Observable<Object>;
  private searchTerm = new Subject<string>();

  constructor(private router: Router) { }

  search(term : string): void {
    this.searchTerm.next(term);
  }

  ngOnInit() {
  }

}
