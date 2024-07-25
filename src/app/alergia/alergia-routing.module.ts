import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAlergiaComponent } from './cadastro-alergia/cadastro-alergia.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroAlergiaComponent,
  }
  ,
  {
    path: 'cadastro-alergia',
    component: CadastroAlergiaComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlergiaRoutingModule { }


