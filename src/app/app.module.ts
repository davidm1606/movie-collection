import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieListItemComponent } from './movie-list/movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieNameFilterPipe } from './pipes/movie-name-filter.pipe';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { SetMoviePathPipe } from './pipes/set-movie-path.pipe';
import { Page404Component } from './page404/page404.component';

const appRoutes: Routes = [
    {path: 'movies', component : MovieListComponent},
    {path: 'moviedetail/:key' , component : MovieDetailComponent},
    {path: '', component : MovieListComponent},
    { path: '**', component: Page404Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieDetailComponent,
    MovieNameFilterPipe,
      NavigationTopComponent,
      SetMoviePathPipe,
      Page404Component
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

