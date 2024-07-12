import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterFilhoComponent } from './manter-filho.component';

describe('ManterFilhoComponent', () => {
  let component: ManterFilhoComponent;
  let fixture: ComponentFixture<ManterFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
