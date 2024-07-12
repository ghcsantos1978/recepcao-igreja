import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlergiaEntity } from 'src/app/usuario/entity/alergia.entity';
import { Usuario } from 'src/app/usuario/entity/usuario.entity';

@Component({
  selector: 'app-manter-alergia',
  templateUrl: './manter-alergia.component.html',
  styleUrls: ['./manter-alergia.component.scss']
})
export class ManterAlergiaComponent implements OnInit {

  @Input()
  alergia?: AlergiaEntity;
  form?: FormGroup;
  @Input()
  exibirModal?:boolean;
  @Input()
  novaAlergia?: boolean;

  @Output() fecharModalEvent = new EventEmitter();

  @Output() salvarEvent = new EventEmitter<AlergiaEntity>();



  constructor() { }

  ngOnInit(): void {
  }

  fecharModal(){
    this.exibirModal = false;
    this.fecharModalEvent.emit();
  }

  salvarAlergia(){
    let alergia: AlergiaEntity = new AlergiaEntity();
    if (!this.novaAlergia){
      alergia.id = this.alergia?.id == null?null:this.alergia.id;

    }
    alergia.descricaoAlergia = this.form?.controls.descricao.value;

    this.salvarEvent.emit(alergia);
  }

}
