import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultasService } from 'src/app/services/consultas.service';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { MensagemComponent } from './../mensagem/mensagem.component';
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
  valor: any;

  constructor(private fb: FormBuilder, private ConsultasService: ConsultasService, private dialog: MatDialog) {
    this.getter();
  }

  //Verifica se há erro na validação do nome
  error(field: string) {
    return this.form.get(field).errors
  }

  //Busca as marcas cadastrada na API
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
  //Inserindo o valor do veiculo a variavel que será colocada no formulario
  setValor(veiculo: any) {
    this.valor = veiculo.target.dataset.preco;
  }

  //Recebe os dados do formulario 
  enviarDados() {
    this.form.value.valor = this.valor;
    const dadosForm = this.form.value;
    this.ConsultasService.enviarDados(dadosForm).subscribe(data => {
      //Configurando mensagem de sucesso ao enviar o formulario
      if (data == "sucesso") {
        const dialogRefa = this.dialog.open(MensagemComponent, {
          data: {
            message: 'Cadastro com sucesso',
            color: 'green',
            buttonText: {
              ok: 'Fechar'
            }
          }
        });
      }
      else{
        const dialogRefa = this.dialog.open(MensagemComponent, {
          data: {
            message: 'Erro ao cadastrar',
            color: 'red',
            buttonText: {
              ok: 'Fechar'
            }
          }
        });
      }
    }, erros => {
      //Configurando mensagem de erro ao enviar o formulario
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
    //Iniciando o formulario
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),]],
      sexo: ['', [Validators.required]],
      date: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      veiculo: ['', [Validators.required]],
      valor: []
    });
  }

}
