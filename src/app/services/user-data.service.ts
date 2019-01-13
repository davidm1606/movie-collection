import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Movie} from '../models/movie';


@Injectable({
  providedIn: 'root'
})

export class UserDataService {
    public storage: any;
    public movie: Movie;
    public imgPath = '/assets/images/movie-covers/';
    public movies: Movie[];
    public moviesPopulated = false;

    public searchQuery = new BehaviorSubject('');
    public showSearchBar = new BehaviorSubject('');

    constructor() { }

    changeSearchQuery(message: string) {
        this.searchQuery.next(message);
    }



}
