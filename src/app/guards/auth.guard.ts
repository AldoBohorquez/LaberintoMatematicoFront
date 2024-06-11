import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AutenticacionService);




  if (authService.isLoggedInSync()) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
