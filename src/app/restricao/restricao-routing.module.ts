import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroRestricaoComponent } from './cadastro-restricao/cadastro-restricao.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroRestricaoComponent,
  }
  ,
  {
    path: 'cadastro-restricao',
    component: CadastroRestricaoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestricaoRoutingModule { }
