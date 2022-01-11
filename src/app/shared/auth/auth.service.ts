import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserAuth } from './../../models/user';

const AUTH_API = 'http://localhost:5000/api/';
/* const httpOptions = {

  headers: new HttpHeaders().set('Content-Type', 'application/json')
} */

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  [x: string]: any;

  currentUser = {};

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


  /* signIn(userData: User): Observable<any> {
    return this.http.post(AUTH_API + 'login', httpOptions);
  } */

  signIn(body: any) {
    return this.http.post(AUTH_API + 'login', body, {
      observe: 'body'
    });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['signIn']);
    }
  }

  // User profile
  // getUserProfile(id:any): Observable<any> {
  //   let api = `${this.endpoint}/user-profile/${id}`;
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res: any) => {
  //       return res || {}
  //     }),
  //     catchError(this.handleError)
  //   )
  // }

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
