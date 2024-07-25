import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UsuarioModule } from './usuario/usuario.module';
import { AppRoutingModule } from './app-routing.module';
import { AlergiaModule } from './alergia/alergia.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import {MenuModule} from 'primeng/menu';
import { RestricaoModule } from './restricao/restricao.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
   CommonModule,
   BrowserModule,
   MenuModule,
   UsuarioModule,
   AlergiaModule,
   RestricaoModule,
   BrowserAnimationsModule,
   AppRoutingModule,


  ],
  exports:[CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
