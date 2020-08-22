import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  checkout(payload) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'multipart/form-data',
      'Authorization': 'Bearer ' + this.auth.currentUserValue
    });

    return this.http.post(`${environment.api}/api/cart/project/1`, payload, {headers: httpHeaders});
  }
}