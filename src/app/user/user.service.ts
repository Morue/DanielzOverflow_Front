import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, filter, mergeMap, take } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private users: User[] = [
  //   {
  //     id: 1,
  //     firstName: 'Jan',
  //     lastName: 'Jansen',
  //     emailAdress: 'j.jansen@server.nl',
  //   },
  //   {
  //     id: 2,
  //     firstName: 'Kees',
  //     lastName: 'Van Dijk',
  //     emailAdress: 'k.vandijk@server.nl',
  //   },
  // ];

  constructor() {}

  // getAll(): Observable<User[]> {
  //   // 'of' maakt een Observable<User[]>
  //   return of(this.users).pipe(delay(1500));
  // }

  // getById(id: number): Observable<User> {
  //   // 'from' maakt een array van Observable<User>
  //   // Van dat array willen we 1 waarde, met de gevraagde id.
  //   return from(this.users).pipe(
  //     filter((item) => item.id === id),
  //     take(1)
  //   );
  // }
}
