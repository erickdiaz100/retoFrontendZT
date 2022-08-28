import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/productsData';
  constructor(private httpClient: HttpClient) { }

   sendGetRequest(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
