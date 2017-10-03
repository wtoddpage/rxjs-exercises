import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeAll';

/*
  Input Observable
  cold('(ab)---|', {a: cold('-a-b-c--|'), b: cold('--x-y-z-|')})

  Expected Observable
  cold('-axbycz-|')

*/

export const mergeAllResult = (obs: Observable<Observable<string>>) => {
  return obs.mergeAll();
};
