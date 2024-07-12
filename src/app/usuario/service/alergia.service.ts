import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Constantes from "src/app/shared/constantes";
import { FilhoEntity } from "../entity/filho.entity";
import { AlergiaEntity } from "../entity/alergia.entity";

@Injectable({
  providedIn: 'root'
})



export class AlergiaService {

  URL_CADASTRO_ALERGIA = "/cadastro-alergia";

  deletarFilho(alergia: AlergiaEntity) : Promise<any> {
    return this.http.delete(`${Constantes.URL_BASE_API_CADASTRO_USUARIO} + ${this.URL_CADASTRO_ALERGIA} /${alergia.id}`).toPromise();
  }



  salvarFilho(alergia: AlergiaEntity) : Promise<any> {
    return this.http.post(Constantes.URL_BASE_API_CADASTRO_USUARIO + this.URL_CADASTRO_ALERGIA,alergia).toPromise();
  }



  carregarAlergias(): Promise<AlergiaEntity[]> {
    return this.http.get<AlergiaEntity[]>(`http://localhost:8080${this.URL_CADASTRO_ALERGIA}`).toPromise();
  }

  constructor(private http: HttpClient) {

  }

}
