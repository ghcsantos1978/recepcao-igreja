import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestricaoRoutingModule } from './restricao-routing.module';
import { CadastroRestricaoComponent } from './cadastro-restricao/cadastro-restricao.component';
import { ManterRestricaoComponent } from './manter-restricao/manter-restricao.component';
import { CommonsModulesModule } from '../shared/modules/commons-modules/commons-modules.module';


@NgModule({
  declarations: [CadastroRestricaoComponent, ManterRestricaoComponent],
  imports: [
    CommonModule,
    CommonsModulesModule,
    RestricaoRoutingModule
  ]
})
export class RestricaoModule { }
