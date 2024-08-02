import { Injectable } from '@angular/core';
import { RestricaoEntity } from '../usuario/entity/restricao.entity';
import { HttpClient } from '@angular/common/http';
import Constantes from '../shared/constantes';

@Injectable({
  providedIn: 'root'
})
export class RestricaoService {

  URL_CADASTRO_RESTRICAO = ""

  constructor(private http: HttpClient) { }

  salvar(restricao: RestricaoEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_RESTRICAO,restricao).toPromise();

  }

}
