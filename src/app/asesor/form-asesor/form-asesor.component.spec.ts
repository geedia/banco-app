import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsesorComponent } from './form-asesor.component';

describe('FormAsesorComponent', () => {
  let component: FormAsesorComponent;
  let fixture: ComponentFixture<FormAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
