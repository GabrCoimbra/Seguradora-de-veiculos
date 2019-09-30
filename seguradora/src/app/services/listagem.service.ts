import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(private http:HttpClient) { }

  /**
   * listagem dos usuarios 
   */
  public listagem() {
    let url = `https://seguradora-back.herokuapp.com/`; 
    return this.http.get(url);
  }
  public deletConsulta(id){
    let url = `https://localhost:8080/delete?id=`+id; 
    return this.http.get(url);
  }
  public descConsulta(id){
    let url = `https://jsonplaceholder.typicode.com/users`;//+id; 
    return this.http.get(url);
  }
}
