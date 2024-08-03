import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

    {
      path: '',
      component: MenuComponent
    }
    ,
    {
      path: 'usuarios',
      loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
    },
    {
      path:"alergias",
      loadChildren: () => import('./alergia/alergia.module').then(m => m.AlergiaModule)
    },
    {
      path:"restricoes",
      loadChildren: () => import('./restricao/restricao.module').then(m => m.RestricaoModule)
    }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
