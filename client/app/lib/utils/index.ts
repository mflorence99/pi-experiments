import { Response } from '@angular/http';

const typeCache: { [label: string]: boolean } = {};

export function debounce(func: Function,
                         wait = 0,
                         immediate = false): Function {
  let timeout = null;
  return function() {
    const context = this;
    const args = arguments;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    }, wait);
    if (callNow)
      func.apply(context, args);
  };
}

export function deepCopy<T>(obj: T): T {
  return <T>JSON.parse(JSON.stringify(obj));
}

export function handleHttpError(error: Response): string {
  const dflt = 'Unknown error; server possibly down';
  const msg = `Status ${error.status}: ${error.statusText || dflt}`;
  console.log(msg);
  return msg;
}

export function type<T>(label: T | ''): T {
  if (typeCache[<string>label])
    throw new Error(`Action type "${label}" is not unique`);
  typeCache[<string>label] = true;
  return <T>label;
}
