import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entity/usuario.entity';
import Constantes from 'src/app/shared/constantes';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  URL_CADASTRO_USUARIO = "/api/v1/cadastro-usuario";

  constructor(private http: HttpClient) {

  }

  deletarUsuario(usuario: Usuario) : Promise<any> {
    return this.http.delete(Constantes.URL_BASE_API + this.URL_CADASTRO_USUARIO + `/${usuario.id}`).toPromise();
  }

  salvarUsuario(usuario: Usuario) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API + this.URL_CADASTRO_USUARIO,usuario).toPromise();
  }

  carregarListaUsuarios(): PromiseLike<Usuario[]> {
    return this.http.get<Usuario[]>(Constantes.URL_BASE_API + this.URL_CADASTRO_USUARIO).toPromise();
  }


  alterarUsuario(usuario: Usuario) : Promise<any> {
    return this.http.put(Constantes.URL_BASE_API + this.URL_CADASTRO_USUARIO + `/${usuario.id}` ,usuario).toPromise();
  }


}
