import { NgModule } from '@angular/core';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ManterUsuarioComponent } from './cadastro-usuario/manter-usuario/manter-usuario.component';
import { CommonsModulesModule } from '../shared/modules/commons-modules/commons-modules.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsuarioService } from './service/usuario.service';
import { CadastroFilhosComponent } from './cadastro-filhos/cadastro-filhos.component';
import { ManterFilhoComponent } from './cadastro-filhos/manter-filho/manter-filho.component';
import { FilhoService } from './service/filho.service';


@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    ManterUsuarioComponent,
    CadastroFilhosComponent,
    ManterFilhoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CommonsModulesModule
  ],
  exports:[CommonModule,
    CadastroUsuarioComponent,
    ManterUsuarioComponent,
    CommonsModulesModule
  ],
  providers:[UsuarioService,FilhoService]

})
export class UsuarioModule { }
