import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('token') && this.authService.isLogOut$.value) {
      this.authService.isLogOut$.next(false);
      this.authService.userName$.next('Log out');
      return true;
    } else if (localStorage.getItem('token')) {
      return true;
    } else return this.router.createUrlTree(['login']);
  }
}
