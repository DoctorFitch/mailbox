import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }


}
