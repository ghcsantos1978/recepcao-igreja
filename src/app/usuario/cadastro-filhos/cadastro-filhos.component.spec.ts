import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFilhosComponent } from './cadastro-filhos.component';

describe('CadastroFilhosComponent', () => {
  let component: CadastroFilhosComponent;
  let fixture: ComponentFixture<CadastroFilhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroFilhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroFilhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
