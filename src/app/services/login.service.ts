import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable, of} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url = 'http://localhost:8090/api/leitor';
  private headers: Headers;
  private options: RequestOptions;
  // private email = 'teste@gmail.com'
  // private senha = '123'


  constructor(private http: HttpClient) {

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    this.options = new RequestOptions({headers: this.headers});
  }

  logar(email: string, senha: string): Observable<any> {
    return this.http.get(`${this.url}/${email}/${senha}`);

  }
}
