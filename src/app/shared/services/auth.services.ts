import { Injectable, NgZone } from '@angular/core';
import { User } from "./user";


import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServices {
  userData: any; // Save logged in user data

  constructor(
    // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private service: HttpClient
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */

  }

  // Sign in with email/password


  getcardtype() {
    //const url = "http://192.168.1.22:9000/api/typecards";
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.service.get(url);
  }

}
