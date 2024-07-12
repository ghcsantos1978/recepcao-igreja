import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlergiaComponent } from './cadastro-alergia.component';

describe('CadastroAlergiaComponent', () => {
  let component: CadastroAlergiaComponent;
  let fixture: ComponentFixture<CadastroAlergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAlergiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
