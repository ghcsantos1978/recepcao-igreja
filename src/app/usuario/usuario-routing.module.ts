import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroFilhosComponent } from './cadastro-filhos/cadastro-filhos.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroUsuarioComponent,
  }
  ,
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
  },

  {
    path: 'cadastro-filhos/:usuarioId',
    component: CadastroFilhosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
