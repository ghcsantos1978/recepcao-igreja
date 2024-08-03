import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlergiaRoutingModule } from './alergia-routing.module';
import { CadastroAlergiaComponent } from './cadastro-alergia/cadastro-alergia.component';
import { CommonsModulesModule } from '../shared/modules/commons-modules/commons-modules.module';
import { ManterAlergiaComponent } from './manter-alergia/manter-alergia.component';
import { AlergiaService } from './service/alergia.service';


@NgModule({
  declarations: [CadastroAlergiaComponent, ManterAlergiaComponent],
  imports: [
    AlergiaRoutingModule,
    CommonsModulesModule,
    CommonModule
  ],
  exports:[
    ManterAlergiaComponent,
    CadastroAlergiaComponent,
  ],
  providers:[AlergiaService]

})
export class AlergiaModule { }


