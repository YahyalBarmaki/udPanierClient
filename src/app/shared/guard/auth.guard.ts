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
    public ts:TokenStorageService,
    public athSer: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | boolean {
      
      const token = this.ts.getToken('jwtToken');
 
     if (token) {
       return true;
        /*console.log(token);
        const tokenDecode = JSON.parse(atob(token.split('.')[1]));
          console.log(tokenDecode.isAdmin);
          if (tokenDecode.isAdmin) {
            
           this.router.navigate(['dashboards'])
          }
          else{
            this.router.navigate(['dashboards'])
            
          }
        */}
      this.router.navigate(['/signIn'])
      return false;
  }

}