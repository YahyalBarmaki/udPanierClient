import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:5000/design/';

@Injectable({
  providedIn: 'root'
})
export class DesignyourcardService {

  constructor(private http:HttpClient) { }


  createYourCard(body:any){
    return this.http.post(AUTH_API + 'create',body,{
      observe:'body'
    })
  }
}
