import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsEntreprise } from 'src/app/models/products';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = environment.endpoint


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseURL + '/all')
      .pipe(map((res: any) => {
        console.log(res)
        return res;
      }))
  }
  getProductById(id: Number): Observable<ProductsEntreprise> {
    return this.http.get<ProductsEntreprise>(this.baseURL + '/' + id);
  }
}