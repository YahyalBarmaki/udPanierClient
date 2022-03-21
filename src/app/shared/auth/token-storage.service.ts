import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TOKEN = 'jwtToken'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  setToken(data:any){

    localStorage.setItem(TOKEN,data)
  }

  getToken(){
    return localStorage.getItem(TOKEN)
  }

  removeToken(){

    localStorage.removeItem(TOKEN)
  }

}
