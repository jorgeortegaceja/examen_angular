import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://127.0.0.1:8000/';
  constructor(
    private http: HttpClient
  ) {

  }

  getRecords(): Promise<any> {
    return this.http.get(this.url + 'api/get-users').toPromise();
  }
}
