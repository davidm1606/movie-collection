import { Component, OnInit } from '@angular/core';


import { Movie } from '../models/movie';
import {UserDataService} from '../services/user-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieCollectionService} from '../services/movie-collection.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  searchQuery: string;

  constructor( private movieCollection: MovieCollectionService
               , private data: UserDataService
               , private route: ActivatedRoute
               , private router: Router) {

  }

  ngOnInit() {
    if (!this.data.moviesPopulated) {
        this.getMovies();
        this.data.moviesPopulated = true;
        this.data.movies=this.movies;
    }
    else {
      this.movies=this.data.movies;
    }
    this.data.searchQuery.subscribe(searchQuery => {
      this.searchQuery = searchQuery;
    });
  }
  getMovies(): void {
      this.movieCollection.getMovies().subscribe(
          movies => {
            this.movies = movies;
            this.data.movies= movies;
          });
  }
  selectMovie(movie, movieKey ): void {
    this.data.movie = movie;
    this.router.navigate(['/moviedetail', movieKey]);

}

}
