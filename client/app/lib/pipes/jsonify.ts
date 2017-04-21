import {Pipe, PipeTransform} from '@angular/core';


/** JSON-ify string */

@Pipe({ name: 'piJSONify' })

export class JSONifyPipe implements PipeTransform {

  transform(s: string) {
    if ((s === null) || (s === undefined))
      return '';
    else if (Array.isArray(s) || (typeof s === 'object'))
      return `${JSON.stringify(s).replace(new RegExp('"', 'g'), '')}`;
    else return s;
  }

}
