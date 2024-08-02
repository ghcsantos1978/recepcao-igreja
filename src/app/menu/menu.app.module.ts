import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenubarModule } from 'primeng/menubar';
import { UsuarioModule } from '../usuario/usuario.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MenubarModule,
    UsuarioModule
  ],
  exports:[MenuComponent]
})
export class MenuAppModule { }
