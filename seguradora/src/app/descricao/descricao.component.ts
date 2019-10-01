import { Component, Inject, OnInit } from '@angular/core';
import { ListagemService } from 'src/app/services/listagem.service';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-descricao',
  templateUrl: './descricao.component.html',
  styleUrls: ['./descricao.component.css']
})
export class DescricaoComponent implements OnInit {
  id:number;
  dados:any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<DescricaoComponent>, private ListagemService: ListagemService) { 
    if (data) {
        this.ListagemService.consultaId(data).subscribe( consultas => {
          this.dados = consultas[0];
          console.log(this.dados);
        }, erros => {
    
        });
    }
  }

  ngOnInit() {
  }

}
