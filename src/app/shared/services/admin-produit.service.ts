import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const AUTH_API = 'http://localhost:5000/product/create';
@Injectable({
  providedIn: 'root'
})
export class AdminProduitService {

  constructor(private http:HttpClient) { }

  ajoutProduit(produitData: FormData){
    return this.http.post(AUTH_API,produitData)
  }
}
