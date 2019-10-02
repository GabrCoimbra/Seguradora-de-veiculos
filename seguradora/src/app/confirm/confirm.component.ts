import { Component, Inject, OnInit } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ListagemService } from 'src/app/services/listagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  message: string;
  confirmButtonText: string;
  cancelButtonText: string;
  id: number;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmComponent>, private ListagemService: ListagemService, private router:Router) {
    if (data) {
      this.message = data.message ;
      this.id = data.id;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok;
        this.cancelButtonText = data.buttonText.cancel;
      }
    }
  }

  onConfirmClick(): void {
    this.ListagemService.deletConsulta(this.id).subscribe( consultas => {
      window.location.reload();
      this.ngOnInit;
    }, erros => {

    });
    this.dialogRef.close(true);

  }
  ngOnInit() {
  }
}