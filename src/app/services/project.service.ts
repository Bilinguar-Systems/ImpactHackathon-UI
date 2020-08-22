import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  url = environment.api;

  public getProject(page): Observable<any> {
    return this.http.get(this.url + "/api/projects?page="+page);
  }
}
