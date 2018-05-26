import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LivroService {


  private url = 'http://localhost:8090/api/livro';
  private urlAll = 'http://localhost:8090/api/livros';

  constructor(private http: HttpClient) { }


  getLivro(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);

  }

  getLivros(): Observable<any> {
    return this.http.get(this.urlAll);

  }

  saveLivro(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateLivro(data: any): Observable<any> {
    return this.http.put(this.url + '/' + data.id, data);
  }

  deleteLivro(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);

  }
}
