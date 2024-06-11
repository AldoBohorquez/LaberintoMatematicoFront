import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGrupoComponent } from './registrar-grupo.component';

describe('RegistrarGrupoComponent', () => {
  let component: RegistrarGrupoComponent;
  let fixture: ComponentFixture<RegistrarGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarGrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
