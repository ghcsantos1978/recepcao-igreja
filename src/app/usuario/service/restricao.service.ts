import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Constantes from "src/app/shared/constantes";
import { FilhoEntity } from "../entity/filho.entity";
import { AlergiaEntity } from "../entity/alergia.entity";
import { RestricaoEntity } from "../entity/restricao.entity";

@Injectable({
  providedIn: 'root'
})



export class RestricaoService {

  URL_CADASTRO_RESTRICAO = "/cadastro-restricao";

  deletarFilho(restricao: RestricaoEntity) : Promise<any> {
    return this.http.delete(`${Constantes.URL_BASE_API_CADASTRO_USUARIO} + ${this.URL_CADASTRO_RESTRICAO} /${restricao.id}`).toPromise();
  }



  salvarRestricao(restricao: RestricaoEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_RESTRICAO,restricao).toPromise();
  }



  carregarRestricoes(): Promise<RestricaoEntity[]> {
    return this.http.get<RestricaoEntity[]>(`http://localhost:8080${this.URL_CADASTRO_RESTRICAO}`).toPromise();
  }

  constructor(private http: HttpClient) {

  }

}
