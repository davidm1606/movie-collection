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
  showSearchBar: string;
    movies: Movie[];
  searchQuery: string;

  constructor( private movieCollection: MovieCollectionService
               , private data: UserDataService
               , private route: ActivatedRoute
               , private router: Router) {

  }

  ngOnInit() {
      // Check to see if movies have been downloaded
    if (!this.data.moviesPopulated) {
        this.getMovies();
        this.data.moviesPopulated = true;
        this.data.movies=this.movies;
    }
    else {
      this.movies=this.data.movies;
    }
    // listen for changes in search query
    this.data.searchQuery.subscribe(searchQuery => {
      this.searchQuery = searchQuery;
    });
    // Always show the search field on this component
    this.data.showSearchBar.next('true');
  }
  getMovies(): void {
      this.movieCollection.getMovies().subscribe(
          movies => {
            this.movies = movies;
            this.data.movies= movies;
          });
  }
  selectMovie(movie, movieKey ): void {
      sessionStorage.setItem('movieSaved', 'false');
    this.data.movie = movie;
    this.router.navigate(['/moviedetail', movieKey]);

}

}
