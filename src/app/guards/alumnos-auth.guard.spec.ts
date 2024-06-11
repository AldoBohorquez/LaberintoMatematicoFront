import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { alumnosAuthGuard } from './alumnos-auth.guard';

describe('alumnosAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => alumnosAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
