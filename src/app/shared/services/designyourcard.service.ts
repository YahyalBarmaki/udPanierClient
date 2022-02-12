import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:5000/design/create';

@Injectable({
  providedIn: 'root'
})
export class DesignyourcardService {

  constructor(private http:HttpClient) { }


  createCard(productData: FormData) {
    return this.http.post(AUTH_API, productData);
  }
}
