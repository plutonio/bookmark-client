import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { Book } from '../modules/book/book';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  private urlId = 'https://www.googleapis.com/books/v1/volumes';
  private urlRestricao = '&langRestrict=pt';
  private headers:Headers;
  private options:RequestOptions;


  constructor(private http: HttpClient) {

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
  }


  getBook(query): Observable<any> {
    return this.http.get(`${this.url} + ${query} + ${this.urlRestricao}`);

  }

  retrieveBook(volumeId: string): Observable<any> {
    return this.http.get(`${this.urlId}/${volumeId}`);
      
}

  saveBook(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
