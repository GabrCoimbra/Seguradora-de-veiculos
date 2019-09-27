import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }
  public getMarca():Observable<any>{
    let url = `http://www.speedyofficer.com.br/desenvVeiculos/wsRstSpeedyVeiculos_Case.d
    ll/veiculo?cod_marca=99`; 
    return this.http.get(url);
  }
}
