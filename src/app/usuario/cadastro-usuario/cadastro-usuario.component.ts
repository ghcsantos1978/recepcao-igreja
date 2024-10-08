import { Component, OnInit, Output } from '@angular/core';
import { Usuario } from '../entity/usuario.entity';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {

  usuarios: Array<Usuario> = [];
  usuarioModal: boolean = false;
  usuarioSelecionado?: Usuario;
  incluirUsuario: boolean = false;


  constructor(private service: UsuarioService,private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.carregarListaUsuarios();
  }

  novoUsuario(){
    this.incluirUsuario = true;
    this.usuarioModal = true;
  }

  async carregarListaUsuarios(){
    this.usuarios = await this.service.carregarListaUsuarios()
  }

  editarUsuario(usuario: Usuario){
    this.usuarioSelecionado = usuario;
    this.incluirUsuario = false;
    this.usuarioModal = true;
  }

  async deletarUsuario(usuario: Usuario){
    await this.service.deletarUsuario(usuario);
    this.carregarListaUsuarios();
  }

  fecharModal(){
    this.usuarioModal = false;
    this.carregarListaUsuarios()
  }

  async salvarUsuario(usuario: Usuario){
    if (this.incluirUsuario){
      await this.service.salvarUsuario(usuario);
    }
    else{
      await this.service.alterarUsuario(usuario);
    }
    this.usuarioModal = false;
    this.carregarListaUsuarios();
    this.messageService.add({severity: 'success', summary:  'Cadastro', detail: 'Usuário cadastrado com sucesso!' })
  }

  adicionarFilhos(usuario: Usuario){
    this.router.navigate([`/cadastro-filhos/${usuario.id}`]);

  }



}
