import {Pipe, PipeTransform} from '@angular/core';


/** Ellipsize string */

@Pipe({ name: 'ellipsize' })
export class EllipsizePipe implements PipeTransform {

  transform(s: string, max = 100) {
    return (s.length > max)? `${s.substring(0, max)} ...` : s;
  }

}
