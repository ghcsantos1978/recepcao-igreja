import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterRestricaoComponent } from './manter-restricao.component';

describe('ManterRestricaoComponent', () => {
  let component: ManterRestricaoComponent;
  let fixture: ComponentFixture<ManterRestricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterRestricaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterRestricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
