import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const AUTH_API = 'https://card-ap.herokuapp.com/product/create';
@Injectable({
  providedIn: 'root'
})
export class AdminProduitService {
  private baseURL = environment.endpoint


  constructor(private http:HttpClient) { }

  ajoutProduit(produitData: FormData){
    return this.http.post(AUTH_API,produitData)
  }
  listProduit(){
    return this.http.get(this.baseURL + '/all')
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }
}
