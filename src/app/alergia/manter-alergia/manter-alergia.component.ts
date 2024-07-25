import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlergiaEntity } from 'src/app/usuario/entity/alergia.entity';

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



  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.construirForm();
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

  construirForm(){
    this.form = this.formBuilder.group({
      id: [this.alergia?.id],
      descricao: [this.alergia?.descricaoAlergia],
    });
  }

}
