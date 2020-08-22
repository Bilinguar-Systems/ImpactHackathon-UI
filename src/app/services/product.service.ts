import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  url = environment.api;
  
  public getProducts(page): Observable<any> {
    return this.http.get(this.url + "/api/products?page="+page);
  }
}
