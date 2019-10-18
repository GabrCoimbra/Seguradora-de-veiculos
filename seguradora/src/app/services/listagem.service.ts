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
    let url = `https://seguradora-back.herokuapp.com/excluir.php?id=`+id; 
    return this.http.get(url);
  }
  public consultaId(id){
    let url = `https://seguradora-back.herokuapp.com/index.php?id=`+id.id+`&st=1`; 
    return this.http.get(url);
  }
}
