import { Component, Inject, OnInit } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  message: string;
  confirmButtonText: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private router:Router , private dialogRef: MatDialogRef<MensagemComponent>) {
    if (data) {
      this.message = data.message ;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok;
      }
    }
  }

  ngOnInit() {
  }
  onConfirmClick( acao ){
    let realiza = acao.target.outerText;
    if (realiza === 'Fechar' ){
      this.dialogRef.close(true);
      this.router.navigate(['/listagem'])
    }
    else{
      this.dialogRef.close(true);
    }
  }

}
