import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { User } from '../classes/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():any {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    const formData = new FormData();
    formData.append('grant_type', "password");
    formData.append('client_id', environment.clientId.toString());
    formData.append('client_secret', environment.clientSecret);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('scope', "");

    const httpParams = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', environment.clientId.toString())
      .set('client_secret', environment.clientSecret)
      .set('scope', "");

    const s = {
      'grant_type': "password",
      'client_id': environment.clientId.toString(),
      'client_secret': environment.clientSecret,
      'username': username,
      'password': password,
      'scope': ""
    }
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'multipart/form-data'
    });

    return this.http.post(`${environment.api}/oauth/token`, s, {headers: httpHeaders})
      .pipe(map(user => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  register(user: User) {
    console.log('t')
    return this.http.post(`${environment.api}/api/register`, user);
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('loggedUser');
    this.currentUserSubject.next(null);
  }
}