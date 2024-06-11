import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionGrupoComponent } from './visualizacion-grupo.component';

describe('VisualizacionGrupoComponent', () => {
  let component: VisualizacionGrupoComponent;
  let fixture: ComponentFixture<VisualizacionGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizacionGrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizacionGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
