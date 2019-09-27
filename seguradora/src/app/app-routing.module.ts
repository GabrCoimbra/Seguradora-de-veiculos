import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path:'cadastro', component: CadastroComponent },
  { path:'', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
