import {Component, Input, OnInit} from '@angular/core';
import { Movie } from '../../models/movie';
import {UserDataService} from '../../services/user-data.service';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})

export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie;
  imgPath = this.appData.imgPath;
  hover = false;
  constructor( private appData: UserDataService) { }

  ngOnInit() {
  }
  getMoviePath(filename) {
    return this.imgPath + filename;
  }
}
