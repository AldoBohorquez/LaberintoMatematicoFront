import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGrupoComponent } from './crud-grupo.component';

describe('CrudGrupoComponent', () => {
  let component: CrudGrupoComponent;
  let fixture: ComponentFixture<CrudGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudGrupoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
