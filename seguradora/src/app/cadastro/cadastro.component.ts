import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultasService } from 'src/app/services/consultas.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  dadosMarca: any;
  dadosVeiculo: any;
  form: FormGroup;
  mensagem: any;
  constructor(private fb: FormBuilder, private ConsultasService: ConsultasService) {
    this.getter();
  }

  //Verifica se há erro na validação do nome
  error(field:string){
    return this.form.get(field).errors
  }

  //Busca as marcas cadastrada na API
  getter(){
    this.ConsultasService.getMarca().subscribe(data => {
      this.dadosMarca = data.marcas;
    }, erros=>{

    });
  }

  //Buscando veiculo caso há uma marca selecionada
  buscaVeiculos( marca: any ){
    if(marca){
      let id = marca.target.value;
      this.ConsultasService.getVeiculos(id).subscribe(data => {
        this.dadosVeiculo = data.veiculos;
      }, erros=>{
  
      });
    }
  }
  
  //Recebe os dados do formulario 
  enviarDados (){
     const dadosForm = this.form.value;
      this.ConsultasService.enviarDados(dadosForm).subscribe(data => {
        this.mensagem = data;
        console.log('teste',data);
      }, erros => {
        console.log(erros);
      });
    

  }
  ngOnInit() {
    this.form = this.fb.group({
      nome: ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50),  ] ],
      sexo: ['', [Validators.required]],
      date: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      veiculo:['', [Validators.required]]
    });
  }

}
