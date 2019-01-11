import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
      providedIn: 'root',
})

export class MovieCollectionService {
    movieUrl = 'assets/movies.json';


    constructor(private http: HttpClient) {}

    getMovies(): Observable<any>  {
        return this.http.get(this.movieUrl).pipe(
            retry(1),
            catchError(this.handleError)
        );
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}