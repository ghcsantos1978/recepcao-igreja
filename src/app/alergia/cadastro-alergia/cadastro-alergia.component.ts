import { Component, OnInit } from '@angular/core';
import { AlergiaEntity } from 'src/app/usuario/entity/alergia.entity';

@Component({
  selector: 'app-cadastro-alergia',
  templateUrl: './cadastro-alergia.component.html',
  styleUrls: ['./cadastro-alergia.component.scss']
})
export class CadastroAlergiaComponent implements OnInit {

  alergias: Array<AlergiaEntity> = new Array<AlergiaEntity>();
  incluirAlergia: boolean = false;
  exibirModal: boolean = false;
  alergiaSelecionada: AlergiaEntity = new AlergiaEntity();

  constructor() { }

  ngOnInit(): void {
  }


  salvarAlergia(alergia: AlergiaEntity){

  }

  fecharModal(){
    this.exibirModal = false;
  }

  editarAlergia(alergia: AlergiaEntity){
    this.alergiaSelecionada = alergia;
    this.exibirModal = true;
  }


}
