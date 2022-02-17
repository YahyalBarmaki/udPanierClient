import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ts:TokenStorageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const token = this.ts.getToken();

      if (token) { 
        /**Test */
        console.log(token)
        const tokenDecode = JSON.stringify(token)
        const tokenDecodeToken =tokenDecode.split('.')[2]
        console.log(tokenDecodeToken)
        return true;

        //const tokenDecode = JSON.parse(atob(token.split('.')[1]))
        /* const tokenDecode = JSON.parse(atob(token))
        const tokenDecode = atob(token) */
        /* if(tokenDecode.isAdmin) */
      }
      this.router.navigate(['/signIn'])
      return false;

   /*  if (localStorage.getItem('access_token')) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false; */
  }

}