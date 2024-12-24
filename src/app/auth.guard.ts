import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Get the Router instance
  const router = inject(Router);

  // Retrieve the role from sessionStorage
  const role = sessionStorage.getItem('role');

  // Check if the role is either 'admin' or 'super admin'
  if (role === 'admin' || role === 'super admin') {
    return true; // Allow access
  }

  // Redirect to login page if the user does not have a valid role
  router.navigate(['/login']);
  return false; // Deny access
};
