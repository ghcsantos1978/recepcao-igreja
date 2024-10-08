import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Constantes from "src/app/shared/constantes";
import { FilhoEntity } from "../entity/filho.entity";
import { MarcarPresencaDTO } from "../dto/marcar-presenca.dto";

@Injectable({
  providedIn: 'root'
})



export class FilhoService {

  URL_CADASTRO_FILHO = "/api/v1/cadastro-filho";

  URL_MARCACAO_PRESENCA = "/api/v1/usuario-presenca";


  constructor(private http: HttpClient) {

  }

  deletarFilho(filho: FilhoEntity) : Promise<any> {
    return this.http.delete(Constantes.URL_BASE_API + this.URL_CADASTRO_FILHO + `/${filho.id}`).toPromise();
  }

  marcarPresenca(presencaDTO: MarcarPresencaDTO) {
    return this.http.post(Constantes.URL_BASE_API + this.URL_MARCACAO_PRESENCA,presencaDTO).toPromise();
  }


  salvarFilho(filho: FilhoEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API + this.URL_CADASTRO_FILHO,filho).toPromise();
  }


  carregarListaFilhos(responsavelId:number): Promise<FilhoEntity[]> {
    return this.http.get<FilhoEntity[]>(`${Constantes.URL_BASE_API}${this.URL_CADASTRO_FILHO}/responsavel/${responsavelId}`).toPromise();
  }



}
