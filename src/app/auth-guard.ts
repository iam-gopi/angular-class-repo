import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './authservice';

export const authGuard: CanActivateFn = (route, state) => {
  // const userData =
  //   typeof window != undefined && !!localStorage.getItem('userDetails');

  const authService = inject(Authservice);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
