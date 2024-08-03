import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestricaoEntity } from 'src/app/restricao/entity/restricao.entity';

@Component({
  selector: 'app-manter-restricao',
  templateUrl: './manter-restricao.component.html',
  styleUrls: ['./manter-restricao.component.scss']
})
export class ManterRestricaoComponent implements OnInit {

  exibirModal:boolean = false;
  @Input()
  restricao?: RestricaoEntity;
  form?: FormGroup;
  @Input()
  novaRestricao?: boolean;

  @Output()
  fecharModalEvent = new EventEmitter();

  @Output()
  salvarEvent = new EventEmitter<RestricaoEntity>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.construirForm();
  }

  fecharModal(){
    this.exibirModal = false;
    this.fecharModalEvent.emit();
  }

  salvarRestricao(){
    let restricao: RestricaoEntity = new RestricaoEntity();
    if (!this.novaRestricao){
      this.restricao!.id = this.restricao?.id == null?null:this.restricao.id;

    }
    restricao.descricao = this.form?.controls.descricao.value;

    this.salvarEvent.emit(restricao);
  }

  construirForm(){
    this.form = this.formBuilder.group({
      id: [this.restricao?.id],
      descricao: [this.restricao?.descricao],
    });
  }

}
