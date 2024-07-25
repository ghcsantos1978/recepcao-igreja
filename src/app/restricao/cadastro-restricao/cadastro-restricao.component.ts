import { Component, OnInit } from '@angular/core';
import { RestricaoEntity } from 'src/app/usuario/entity/restricao.entity';
import { RestricaoService } from '../restricao.service';

@Component({
  selector: 'app-cadastro-restricao',
  templateUrl: './cadastro-restricao.component.html',
  styleUrls: ['./cadastro-restricao.component.scss']
})
export class CadastroRestricaoComponent implements OnInit {

  restricoes: Array<RestricaoEntity> = new Array<RestricaoEntity>();
  exibirModal: boolean = false;
  novaRestricao: boolean = false;
  restricaoSelecionada: RestricaoEntity = new RestricaoEntity();

  constructor(private service: RestricaoService) { }

  ngOnInit(): void {
  }

  salvarRestricao(restricao:RestricaoEntity){

  }

  fecharModal(){
    this.exibirModal = false;
  }

  incluirRestricao(){
    this.novaRestricao = true;
    this.exibirModal = true;
  }

}
