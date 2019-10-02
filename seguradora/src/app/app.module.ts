import { HttpClient, HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { DescricaoComponent } from './descricao/descricao.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CadastroComponent,
    ListagemComponent,
    ConfirmComponent,
    DescricaoComponent,
    MensagemComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  exports:[ConfirmComponent],
  providers: [HttpClient],
  entryComponents: [ConfirmComponent,DescricaoComponent,MensagemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
