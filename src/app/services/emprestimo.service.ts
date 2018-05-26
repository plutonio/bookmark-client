import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class EmprestimoService {

  private url = 'http://localhost:8090/api/emprestimo';
  private headers:Headers;
  private options:RequestOptions;

  
  constructor(private http: HttpClient) { 

    /*ADICIONANDO O JSON NO HEADER */
      this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
      this.options = new RequestOptions({ headers: this.headers });
  }


  getEmprestimo(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
        
  }

  saveEmprestimo(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  updateEmprestimo(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
