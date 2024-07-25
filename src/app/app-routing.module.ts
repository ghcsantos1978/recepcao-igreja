import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./menu/menu.module').then(m=> m.MenuModule)
  },
  {
    path:'menu',
    loadChildren:()=>import('./menu/menu.module').then(m=> m.MenuModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path:"alergias",
    loadChildren: () => import('./alergia/alergia.module').then(m => m.AlergiaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
