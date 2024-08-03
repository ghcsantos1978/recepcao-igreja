import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilhoEntity } from '../../entity/filho.entity';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../entity/usuario.entity';
import { RestricaoEntity } from '../../../restricao/entity/restricao.entity';
import { FormBase } from 'src/app/shared/ui/form-base';
import { AlergiaEntity } from '../../entity/alergia.entity';

@Component({
  selector: 'app-manter-filho',
  templateUrl: './manter-filho.component.html',
  styleUrls: ['./manter-filho.component.scss']
})
export class ManterFilhoComponent extends FormBase implements OnInit {

    @Input()
    filhoEntity?: FilhoEntity;
    form?: FormGroup;
    @Input()
    exibirFilhoModal?:boolean;
    @Input()
    novoFilho?: boolean;


    @Output() fecharModalEvent = new EventEmitter();

    @Output() salvarEvent = new EventEmitter<FilhoEntity>();

    @Input()
    listaRestricoes: Array<RestricaoEntity> = new Array<RestricaoEntity>();
    @Input()
    listaAlergias: Array<AlergiaEntity> = new Array<AlergiaEntity>();

  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {
    super();


  }

  ngOnInit(): void {
    this.construirForm();
  }


  fecharModal(){
    this.fecharModalEvent.emit();
  }

  salvarFilho(){
    let filho = new FilhoEntity();
    if (!this.novoFilho){
      filho.id = this.filhoEntity?.id!;
    }
    filho.nome = this.form?.controls.nome.value;
    filho.celular = this.form?.controls.celular.value;
    filho.alergias = this.form?.controls.alergias.value;
    filho.restricoes = this.form?.controls.restricoes.value;
    this.salvarEvent.emit(filho);

  }

  construirForm(){
    console.log("filho",JSON.stringify(this.filhoEntity));

    this.form = this.formBuilder.group({
      id: [this.filhoEntity?.id],
      nome: [this.filhoEntity?.nome],
      celular: [this.filhoEntity?.celular],
      alergias: [this.filhoEntity?.alergias?.map((a: AlergiaEntity) => a.id)],
      restricoes: [this.filhoEntity?.restricoes?.map((r: RestricaoEntity) => r.id)],
    });
  }

}
