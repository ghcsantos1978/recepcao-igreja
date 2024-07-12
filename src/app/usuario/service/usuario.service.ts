import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../entity/usuario.entity';
import Constantes from 'src/app/shared/constantes';

@Injectable({
  providedIn: 'root'
})



export class UsuarioService {

  URL_CADASTRO_USUARIO = "/cadastro-usuario";

  deletarUsuario(usuario: Usuario) : Promise<any> {
    console.log("deletarUsuario")
    console.log("URL",Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_USUARIO + `/${usuario.id}`)
    return this.http.delete(Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_USUARIO + `/${usuario.id}`).toPromise();
  }



  salvarUsuario(usuario: Usuario) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_USUARIO,usuario).toPromise();
  }



  carregarListaUsuarios(): PromiseLike<Usuario[]> {
    return this.http.get<Usuario[]>(`http://localhost:8080${this.URL_CADASTRO_USUARIO}`).toPromise();
  }

  constructor(private http: HttpClient) {

  }

}
