import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionAlumnoService } from '../services/autenticacion-alumno.service';

export const alumnosAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AutenticacionAlumnoService);

  if (authService.isLoggedInSync()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
