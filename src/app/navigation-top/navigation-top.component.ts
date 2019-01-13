import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service';

@Component({
  selector: 'app-navigation-top',
  templateUrl: './navigation-top.component.html',
  styleUrls: ['./navigation-top.component.scss']
})
export class NavigationTopComponent implements OnInit {
  showSearchBar: string = 'true';
    searchQuery: string;
  constructor( private appData: UserDataService) { }

  ngOnInit() {
      this.appData.searchQuery.subscribe(searchQuery => {
          this.searchQuery = searchQuery;
      });
      this.appData.showSearchBar.subscribe(showSearchBar => {
          this.showSearchBar = showSearchBar;
    });
  }
  onQueryChange(message) {
    this.appData.changeSearchQuery(message);
  }

}
