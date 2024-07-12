import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterAlergiaComponent } from './manter-alergia.component';

describe('ManterAlergiaComponent', () => {
  let component: ManterAlergiaComponent;
  let fixture: ComponentFixture<ManterAlergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterAlergiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
