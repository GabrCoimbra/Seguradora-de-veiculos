import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  response: String;
  responseColor: String;

  constructor(private fb: FormBuilder, private ConsultasService: ConsultasService, private dialog: MatDialog) {
    this.getter();
  }

  //Verifica se há erro na validação do nome
  error(field: string) {
    return this.form.get(field).errors
  }
  MaiorQue18Anos(controle: AbstractControl) {
    const nascimento = controle.value;
    const [ano, mes, dia] = nascimento.split('-');
    const hoje = new Date();
    const dataNascimento = new Date(ano, mes, dia, 0, 0, 0);
    const tempoParaTeste = 1000 * 60 * 60 * 24 * 365 * 18; //18 anos em mili segundos...

    if (hoje.getTime() - dataNascimento.getTime() >= tempoParaTeste)
      return null;

    return { menorDeIdade: true };
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
    this.response = data == 'sucesso' ? "Sucesso ao cadastrar" : "Erro ao cadastrar";
    this.responseColor = data == 'sucesso' ? 'green' : 'red';
      //Configurando mensagem ao enviar o formulario
        const dialogRefa = this.dialog.open(MensagemComponent, {
          data: {
            message: this.response,
            color: this.responseColor,
            buttonText: {
              ok: 'Fechar'
            }
          }
        });
    }, erros => {
      //Configurando mensagem de erro ao enviar o formulario
      const dialogRef = this.dialog.open(MensagemComponent, {
        data: {
          message: 'Erro ao cadastrar',
          color: 'red',
          buttonText: {
            ok: 'Voltar'
          }
        }
      });
    });
  }
  /** 
   *
   * FAZENDO COM QUE TENHA VERICAÇÕES EM TEMPO REAL DOS FORMULARIOS
   *  
  */
  get nome() {
    return this.form.get('nome');
  }
  get nascimento(){
    return this.form.get('date');
  }
  get marca(){
    return this.form.get('marca');
  }
  get veiculo(){
    return this.form.get('veiculo');
  }


  ngOnInit() {
    //Iniciando o formulario
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),]],
      sexo: ['', [Validators.required]],
      date: ['', [Validators.required,this.MaiorQue18Anos]],
      marca: ['', [Validators.required]],
      veiculo: ['', [Validators.required]],
      valor: []
    });
  }

}
