import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getReporting() {
    return this.http.get('/api/items').subscribe(data => {
      this.results = data['results'];
    });
  }


}
