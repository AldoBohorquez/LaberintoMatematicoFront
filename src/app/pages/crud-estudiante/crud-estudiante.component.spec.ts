import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstudianteComponent } from './crud-estudiante.component';

describe('CrudEstudianteComponent', () => {
  let component: CrudEstudianteComponent;
  let fixture: ComponentFixture<CrudEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
