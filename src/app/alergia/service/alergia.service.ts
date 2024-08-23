import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Constantes from "src/app/shared/constantes";
import { FilhoEntity } from "../../usuario/entity/filho.entity";
import { AlergiaEntity } from "../../usuario/entity/alergia.entity";

@Injectable({
  providedIn: 'root'
})



export class AlergiaService {

  URL_CADASTRO_ALERGIA = "/api/v1/cadastro-alergia";

  constructor(private http: HttpClient) {

  }

  deletarFilho(alergia: AlergiaEntity) : Promise<any> {
    return this.http.delete(`${Constantes.URL_BASE_API} + ${this.URL_CADASTRO_ALERGIA} /${alergia.id}`).toPromise();
  }

  salvarAlergia(alergia: AlergiaEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API + this.URL_CADASTRO_ALERGIA,alergia).toPromise();
  }

  alterarAlergia(alergia: AlergiaEntity) : Promise<any> {
    console.log(Constantes.URL_BASE_API + this.URL_CADASTRO_ALERGIA + `/${alergia.id}`);
    return this.http.put(Constantes.URL_BASE_API + this.URL_CADASTRO_ALERGIA + `/${alergia.id}`,alergia).toPromise();
  }

  carregarAlergias(): Promise<AlergiaEntity[]> {
    return this.http.get<AlergiaEntity[]>(`${Constantes.URL_BASE_API}${this.URL_CADASTRO_ALERGIA}`).toPromise();
  }


}
