import {Pipe, PipeTransform} from '@angular/core';


/** Make string breakable */

@Pipe({ name: 'piBreakable' })

export class BreakablePipe implements PipeTransform {

  transform(s: string,
            dflt = '') {
    if ((s === null) || (s === undefined))
      return dflt;
    else if (typeof s.replace === 'function')
      return s.replace(/([\/;:\)\]\}\d\.,_])/g, '\u200b$1');
    else return s;
  }

}
