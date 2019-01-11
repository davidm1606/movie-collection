import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/movie';

@Pipe({
  name: 'movieNameFilter'
})
export class MovieNameFilterPipe implements PipeTransform {

  transform(movielist: Movie[], searchTerm: string): Movie[] {
    if (!movielist || !searchTerm) {
      return movielist;
    }
    return movielist.filter(movie => movie.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
