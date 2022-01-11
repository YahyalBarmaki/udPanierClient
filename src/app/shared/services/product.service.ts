import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsEntreprise, productsEntreprises, ProductsParticulier } from 'src/app/models/products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>("http://localhost:5000/product/all")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getProductById(product: ProductsEntreprise): Observable<any> {
    return this.http.get('http://localhost:5000/product/all' + product.id);
  }
}
