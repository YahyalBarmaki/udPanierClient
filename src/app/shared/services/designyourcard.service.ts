import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'https://card-ap.herokuapp.com/design/create';

@Injectable({
  providedIn: 'root'
})
export class DesignyourcardService {

  constructor(private http:HttpClient) { }


  createCard(productData: FormData) {
    return this.http.post(AUTH_API, productData);
  }
}
