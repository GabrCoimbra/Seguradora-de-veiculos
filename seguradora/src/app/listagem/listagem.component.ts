import { Component, OnInit } from '@angular/core';
import { ListagemService } from 'src/app/services/listagem.service';
import { faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmComponent } from './../confirm/confirm.component';
import { DescricaoComponent } from './../descricao/descricao.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  dadosConsulta: any;
  delet = faTrashAlt;
  detalhes = faInfoCircle;
  
  
  constructor(private ListagemService: ListagemService, private dialog: MatDialog ) {
    this.listar();
  }

  openConfirm(id) {
    const dialogRef = this.dialog.open(ConfirmComponent,{
      data:{
        message: 'Deseja excluir a consulta?',
        id : id,
        buttonText: {
          ok: 'Excluir',
          cancel: 'Cancelar'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      this.ngOnInit;
    });
  }
  openDesc( id ){
    const dialogRef = this.dialog.open(DescricaoComponent,{
      data:{
        id: id
      }
    });
  }

  /*
  ** Listar todos os serviços
  */
  listar(){
      this.ListagemService.listagem().subscribe(data => {
      this.dadosConsulta = data;
    }, erros=>{
      console.log(erros);
    });
  }
  ngOnInit() {
    
  }

}
