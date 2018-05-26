import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LeitorService {

  private url = 'http://localhost:8090/api/leitor';
  private urlAll = 'http://localhost:8090/api/leitores';

  private headers: Headers;
  private options: RequestOptions;


  constructor(private http: HttpClient) {

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }


  getLeitor(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);

  }

  getLeitores(): Observable<any> {
    return this.http.get(this.urlAll);

  }

  saveLeitor(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateLeitor(data: any): Observable<any> {
    return this.http.put(this.url + '/' + data.id, data);
  }

  deleteLeitor(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
