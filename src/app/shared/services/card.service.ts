import { Injectable } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  items: ProductsEntreprise[] = [];
  constructor() { }

  addToCart(product: ProductsEntreprise) {
    this.items.push(product);
  }

  getItems() {
    console.log("hello")
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
