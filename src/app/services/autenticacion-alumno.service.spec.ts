import { TestBed } from '@angular/core/testing';

import { AutenticacionAlumnoService } from './autenticacion-alumno.service';

describe('AutenticacionAlumnoService', () => {
  let service: AutenticacionAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacionAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
