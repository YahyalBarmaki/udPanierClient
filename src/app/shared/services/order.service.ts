import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private ServerURL = environment.endpoint;
  constructor(private http: HttpClient) { }


  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.ServerURL}orders/${orderId}`).toPromise();
  }

}
interface ProductResponseModel {

  _id: number;
  title: string;
  desc: string;
  price: number;
  qtite: number;
  imageUrl: string;

}