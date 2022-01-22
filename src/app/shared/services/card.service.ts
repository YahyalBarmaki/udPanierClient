import { Injectable, Input } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

export const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  /**
   * New method
   */
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]); 

  
  /////////////////
  ServerURL = environment.endpoint;
  @Input() _id!: number;
  productId!: Number;
  qtite!: number;


  constructor(
    private toast: ToastrService
  ) {
   // this.cartItemList = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  
  initLocalStorage(){
    const initialCart = {
      items: []
    }
    const initialCartJson = JSON.stringify(initialCart);
    localStorage.setItem(CART_KEY,initialCartJson);
  }

 

  //////////////////////////////////////////////////////////////
  getProducts() {
    return this.productList.asObservable();
  }
  
  /* setCartItem(cartItem: CartItem): Cart{
    const cart: Cart = JSON.parse(localStorage.getItem(CART_KEY) || '');

    cart.items?.push(cartItem);

    const CartJson = JSON.stringify(cart)
    localStorage.setItem(CART_KEY,CartJson)

    return cart;
  } */
 
  addtoCart(product: any) {
    if(this.cartItemList){
      this.toast.success('Your product added to the cart!', 'Add Item', {
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass:'toast-top-right',
        timeOut: 1500
      });
      
    }
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.syncItems();
    console.log(this.cartItemList)
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.syncItems();

      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  syncItems() {
    const cart: [] = this.cartItemList;
    if (!cart) {
      this.cartItemList =  []
      JSON.parse(localStorage.getItem('Cart')|| '')
    };
    localStorage.setItem('cart', JSON.stringify(cart)); // sync the data

  }
}
