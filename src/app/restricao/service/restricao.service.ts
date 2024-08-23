import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Constantes from 'src/app/shared/constantes';
import { RestricaoEntity } from '../entity/restricao.entity';

@Injectable({
  providedIn: 'root'
})
export class RestricaoService {

  constructor(private http: HttpClient) { }

  private URL_CADASTRO_RESTRICAO:string = "/api/v1/cadastro-restricao";

  carregarRestricoes(): Promise<RestricaoEntity[]>  {
    return this.http.get<RestricaoEntity[]>(Constantes.URL_BASE_API + this.URL_CADASTRO_RESTRICAO).toPromise();
  }

  salvar(restricao: RestricaoEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API + this.URL_CADASTRO_RESTRICAO,restricao).toPromise();

  }


  alterar(restricao: RestricaoEntity) : Promise<any> {
    return this.http.put(Constantes.URL_BASE_API +  this.URL_CADASTRO_RESTRICAO + `/${restricao.id}`,restricao).toPromise();

  }

}
