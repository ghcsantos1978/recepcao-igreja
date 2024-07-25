import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRestricaoComponent } from './cadastro-restricao.component';

describe('CadastroRestricaoComponent', () => {
  let component: CadastroRestricaoComponent;
  let fixture: ComponentFixture<CadastroRestricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroRestricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRestricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
