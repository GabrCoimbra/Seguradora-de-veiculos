import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private ConsultasService: ConsultasService) {
    this.getter();
  }

  error(field:string){
    return this.form.get(field).errors
  }
  getter(){
    this.ConsultasService.getMarca().subscribe(data => {
      console.log('Recebemos',data)
    }, erros=>{

    });
  }
  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(50),  ] ]
    });
  }

}
