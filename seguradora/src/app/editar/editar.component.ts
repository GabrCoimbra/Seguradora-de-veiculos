import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MensagemComponent } from '../mensagem/mensagem.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ConsultasService: ConsultasService, private fb: FormBuilder, private dialog:MatDialog) {

  }
  id: number;
  dados: any;
  form: FormGroup;
  dadosVeiculo: any;
  dadosMarca: any;

  //listando a consulta do id
  listar(id) {
    this.ConsultasService.consultaId(id).subscribe(data => {
      this.dados = data[0];
      this.formulario();
    }, erros => {
      console.log(erros);
    });
  }
  //Cria o formulario para a edição, adicionando os valores do cadastro
  formulario() {
    console.log(this.dados.valor);
    this.form = this.fb.group({
      
      id: [this.dados.id],
      nome: [this.dados.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50),]],
      sexo: [this.dados.sexo, [Validators.required]],
      date: [this.dados.date, [Validators.required]],
      marca: [this.dados.marca, [Validators.required]],
      veiculo: [this.dados.veiculo, [Validators.required]],
      valor: [this.dados.valor]
    });
  }
  //Busca as marcas registrada no webservice
  getter() {
    this.ConsultasService.getMarca().subscribe(data => {
      this.dadosMarca = data.marcas;
    }, erros => {

    });
  }

  //Buscando veiculo caso há uma marca selecionada
  buscaVeiculos(marca: any) {
    if (marca) {
      let id = marca.target.id;
      this.ConsultasService.getVeiculos(id).subscribe(data => {
        this.dadosVeiculo = data.veiculos;
      }, erros => {

      });
    }
  }
  //Coloca o valor do veiculo no formulario
  setValor(veiculo: any) {
    this.dados.valor = veiculo.target.dataset.preco;
  }
  //Recebe os dados do formulario 
  enviarDados() {
    this.form.value.valor = this.dados.valor;
    const dadosForm = this.form.value;
    this.ConsultasService.editarDados(dadosForm).subscribe(data => {
      const dialogRefa = this.dialog.open(MensagemComponent, {
        data: {
          message: 'Editado com sucesso',
          color: 'green',
          buttonText: {
            ok: 'Fechar'
          }
        }
      });
    }, erros => {
      const dialogRef = this.dialog.open(MensagemComponent, {
        data: {
          message: 'Erro ao cadastrar',
          color: 'red',
          buttonText: {
            ok: 'Volar'
          }
        }
      });
    });
  }
  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.id = parametros['id'];
      this.listar(this.id);
      this.getter();
    });
  }

}
