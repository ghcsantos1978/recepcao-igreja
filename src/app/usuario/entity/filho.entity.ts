import { AlergiaEntity } from "./alergia.entity";
import { RestricaoEntity } from "./restricao.entity";

export class FilhoEntity {
  id!: number | null;
  nome!: string;
  celular!: string;
  responsavelId!:number | null;
  restricoes!: Array<RestricaoEntity>;
  alergias!:Array<AlergiaEntity>;

  getRestricoesListagem(){
    let retorno:string = "";
    if (this.restricoes!=null && this.restricoes !=undefined && this.restricoes.length > 0){
      this.restricoes.forEach(restricao=>{
        retorno += restricao.descricao;
      })
      retorno = retorno.length > 0 ? retorno.substring(0,retorno.length -1):"";
    }
    return retorno;
  }


  getAlergiasListagem(){
    let retorno:string = "";
    if (this.alergias!=null && this.alergias !=undefined && this.alergias.length > 0){
      this.alergias.forEach(alergia=>{
        retorno += alergia.descricaoAlergia;
      })
      retorno = retorno.length > 0 ? retorno.substring(0,retorno.length -1):"";
    }
    return retorno;
  }

}
