import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../entity/usuario.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.scss']
})
export class ManterUsuarioComponent implements OnInit {

    @Input("usuario")
    usuario?: Usuario;
    form?: FormGroup;
    @Input()
    exibirModal?:boolean;
    @Input()
    novoUsuario?: boolean;

    @Output() fecharModalEvent = new EventEmitter();

    @Output() salvarEvent = new EventEmitter<Usuario>();



    constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {
    }

    contruirForm() {
      this.form = this.formBuilder.group({
        id: [this.usuario?.id],
        nome: [this.usuario?.nome],
        logradouro: [this.usuario?.logradouro],
        cpf: [this.usuario?.cpf],
        bairro: [this.usuario?.bairro],
        cidade: [this.usuario?.cidade],
        estado: [this.usuario?.estado],
        cep: [this.usuario?.cep],
        telefone: [this.usuario?.telefone],
        email: [this.usuario?.email]
      });
    }

    ngOnInit(): void {
      this.contruirForm();
      this.cd.detectChanges();

    }


    fecharModal(){
      this.exibirModal = false;
      this.fecharModalEvent.emit();
    }

    salvarUusuario(){
      let usuario: Usuario = new Usuario();
      if (!this.novoUsuario){
        usuario.id = this.usuario?.id == null?null:this.usuario.id;

      }
      usuario.nome = this.form?.controls.nome.value;
      usuario.cpf = this.form?.controls.cpf.value;
      usuario.logradouro = this.form?.controls.logradouro.value;
      usuario.bairro = this.form?.controls.bairro.value;
      usuario.cep = this.form?.controls.cep.value;
      usuario.telefone = this.form?.controls.telefone.value;
      usuario.email = this.form?.controls.email.value;
      usuario.estado = this.form?.controls.estado.value;
      this.salvarEvent.emit(usuario);
  }

}
