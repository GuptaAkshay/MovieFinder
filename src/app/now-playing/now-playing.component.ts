import { MoviesService } from '../movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  now_playing : Observable<Object>;
  
  constructor(private movie_serv: MoviesService) { }

  getNowPlaying(): void {
    this.movie_serv.getNowPlayingMovies().subscribe(res =>{
      this.now_playing = res.results;
    });
  }
  
  ngOnInit() {
    this.getNowPlaying();    
  }

}
