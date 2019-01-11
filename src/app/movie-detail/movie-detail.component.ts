import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Movie} from '../models/movie';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    @Input() movie: Movie;
    imgPath = this.data.imgPath;

  constructor( private route: ActivatedRoute, private data: UserDataService) {  }

  ngOnInit() {
      this.movie = this.data.movie;
  }
}
