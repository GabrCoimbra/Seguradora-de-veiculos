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
    return this.http.post(`https://seguradora-back.herokuapp.com/cadastro.php`,dados);
  }

  public consultaId(id){
    let url = `https://seguradora-back.herokuapp.com/index.php?id=`+id; 
    return this.http.get(url);
  }
  public editarDados(dados){
    return this.http.post(`https://seguradora-back.herokuapp.com/editar.php`,dados);
  }
}
