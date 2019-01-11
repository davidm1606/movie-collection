import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setMoviePath'
})
export class SetMoviePathPipe implements PipeTransform {

  transform(imageUrl:string , path: string): any {
    return path + imageUrl;
  }

}
