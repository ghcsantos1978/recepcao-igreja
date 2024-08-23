import { FilhoService } from '../service/filho.service';
import { FilhoEntity } from '../entity/filho.entity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlergiaEntity } from '../entity/alergia.entity';
import { RestricaoEntity } from '../../restricao/entity/restricao.entity';
import { AlergiaService } from '../../alergia/service/alergia.service';
import { RestricaoService } from 'src/app/restricao/service/restricao.service';
import { MarcarPresencaDTO } from '../dto/marcar-presenca.dto';

@Component({
  selector: 'app-cadastro-filhos',
  templateUrl: './cadastro-filhos.component.html',
  styleUrls: ['./cadastro-filhos.component.scss']
})
export class CadastroFilhosComponent implements OnInit {

  filhosListagem:Array<FilhoEntity> = new Array<FilhoEntity>();
  exibirFilhoModal:boolean = false;
  novoFilho:boolean = false;
  filhoSelecionado: FilhoEntity = new FilhoEntity();
  usuarioId: number | null;
  listaAlergias: Array<AlergiaEntity> = new Array<AlergiaEntity>();
  listaRestricoes: Array<RestricaoEntity> = new Array<RestricaoEntity>();
  filhosSelecionados: Array<FilhoEntity> = new Array<FilhoEntity>();


  constructor(private service: FilhoService,private activatedRoute: ActivatedRoute,private alergiaService: AlergiaService,
    private restricaoService: RestricaoService) {

    }

  ngOnInit(): void {
    this.carregaDadosInicias();
  }

  async carregaDadosInicias(){
    await this.getUsuario();
    this.carregarAlergias();
    this.carregarRestricoes();
    this.filhosListagem = await this.service.carregarListaFilhos(this.usuarioId!);
  }

  private async getUsuario() {
    this.usuarioId = +this.activatedRoute.snapshot.paramMap.get('usuarioId')!;
  }

  adicionarFilho(){
    this.novoFilho = true;
    this.exibirFilhoModal = true;
  }

  editarFilho(filho:FilhoEntity){
    this.filhoSelecionado = filho;
    this.novoFilho = false;
    this.exibirFilhoModal = true;
  }

  async excluirFilho(filho:FilhoEntity){
    await this.excluirFilho(filho);
  }

  async marcarPresenca(){
    let presencaDTO = new MarcarPresencaDTO();
    let filhos = new Array<number>();
    presencaDTO.idUsuario = this.usuarioId!
    presencaDTO.dataPresenca = new Date();
    for (const filho of this.filhosSelecionados){
      filhos.push(filho.id!);
    }
    presencaDTO.filhos = filhos;
    await this.service.marcarPresenca(presencaDTO);
  }


  async salvarFilho(filho: FilhoEntity){
    this.setaAlergiasGravacao(filho);
    this.setaARestricoesGravacao(filho);
    filho.responsavelId = this.usuarioId;
    await this.service.salvarFilho(filho);
  }

  private setaAlergiasGravacao(filho: FilhoEntity) {
    if (filho.alergias != undefined && filho.alergias != null) {
      let alergias: Array<AlergiaEntity> = new Array<AlergiaEntity>();
      let alergiaRetorno: AlergiaEntity = new AlergiaEntity();
      filho.alergias.forEach(alergia => {
        alergiaRetorno.id = Number.parseInt(alergia as any)
        alergias.push(alergiaRetorno);
        alergiaRetorno = new AlergiaEntity()
      });
      filho.alergias = alergias;
      console.log("alergias",JSON.stringify(filho.alergias));

    }
  }

  private setaARestricoesGravacao(filho: FilhoEntity) {
    if (filho.restricoes != undefined && filho.restricoes != null) {
      let restricoes: Array<RestricaoEntity> = new Array<RestricaoEntity>();
      let restricaoRetorno: RestricaoEntity = new RestricaoEntity();
      filho.restricoes.forEach(retricao => {
        restricaoRetorno.id = Number.parseInt(retricao as any);
        restricoes.push(restricaoRetorno);
        restricaoRetorno = new RestricaoEntity();
      });
      filho.restricoes = restricoes;
      console.log("restricoes",JSON.stringify(filho.restricoes));
    }
  }

  fecharModal(){
    this.exibirFilhoModal = false;
  }

  async carregarAlergias(){
    this.listaAlergias = await this.alergiaService.carregarAlergias();
  }

  async carregarRestricoes(){
    this.listaRestricoes = await this.restricaoService.carregarRestricoes();
  }

}
