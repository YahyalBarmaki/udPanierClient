import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsEntreprise, ProductsParticulier } from 'src/app/models/products';


const baseURL = 'http://localhost:5000/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(baseURL + '/all')
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getProductById(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }
}