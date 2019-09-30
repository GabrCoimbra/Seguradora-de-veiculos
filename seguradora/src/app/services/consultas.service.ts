import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }
  public getMarca():Observable<any>{
    let url = `https://cors-anywhere.herokuapp.com/http://www.speedyofficer.com.br/desenvVeiculos/wsRstSpeedyVeiculos_Case.dll/veiculo/marca`; 
    return this.http.get(url);
  }
  public getVeiculos(id):Observable<any>{
    let url = `https://cors-anywhere.herokuapp.com/http://www.speedyofficer.com.br/desenvVeiculos/wsRstSpeedyVeiculos_Case.dll/veiculo?cod_marca=`+id; 
    return this.http.get(url);
  }
  public enviarDados(dados){
    let options = { dados };
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`,options);
  
  }
}
