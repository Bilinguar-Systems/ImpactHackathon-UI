import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../classes/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    // return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
    //     localStorage.setItem('loggedUser', JSON.stringify(user));
    //     this.currentUserSubject.next(user);
    //     return user;
    //   }));
    return true;
  }

  register(user: User) {
    return true;
    // return this.http.post(`${config.authServer}/users/register`, user);
}

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('loggedUser');
    this.currentUserSubject.next(null);
  }
}