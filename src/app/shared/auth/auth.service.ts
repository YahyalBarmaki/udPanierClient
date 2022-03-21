import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuth } from './../../models/user';
import { SocialUser } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

const AUTH_API = 'https://card-ap.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseURL = environment.endpointBase
  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  // Sign-up
  signUp(body: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', body, {
      observe: 'body'
    })
  }


  signIn(body: any) {
    return this.http.post(this.baseURL + 'api/login', body, {
      observe: 'body'
    })

  }
  signLogin(email: string, password: string):Observable<User>{
    return this.http.post<User>(this.baseURL + 'api/login', { email, password})

  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    /* let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['signIn']);
    } */

    // window.sessionStorage.clear();
  }

  /* public getUser(): any {
    const user = localStorage.getItem('access_token');
    console.log(user)
    if (user) {
      return JSON.parse(user);
    }

    return {};
  } */

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
