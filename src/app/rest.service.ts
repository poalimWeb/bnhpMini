import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) , params: {}};
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  get(url: string, params): Observable<any> {
    this.options.params = params;
    return this.http.get(this.baseUrl + url, this.options);
  }
}
