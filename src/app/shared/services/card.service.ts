import { Injectable, Input } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { environment } from 'src/environments/environment';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { CartModelPublic, CartModelServer } from 'src/app/models/cart.models';
import { DataService } from './data.service';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  /**
   * New method
   */
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);

  /////////////////
  ServerURL = environment.endpoint;
  @Input() _id!: number;
  productId!: Number;
  qtite!: number;
  public cartItemLists: any = [];
  //public productList = new BehaviorSubject<any>([]);
  public productList2 = new BehaviorSubject<any>([]);

  private cartDataClient: CartModelPublic = {
    total: 0,
    prodData: [{
      incart: 0,
      id: 0
    }]
  }


  private cartDataServer: CartModelServer = {
    data: [{
      product: undefined,
      numInCart: 0
    }],
    total: 0
  };
  items: ProductsEntreprise[] = [];
  /*  cartTotal$ = new BehaviorSubject<Number>(0);
   // Data variable to store the cart information on the client's local storage
 
   cartDataObs$ = new BehaviorSubject<CartModelServer>(this.cartDataServer); */


  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private dataService: DataService,
    private toastr: ToastrService
  ) {
    /* this.cartTotal$.next(this.cartDataServer.total);
    this.cartDataObs$.next(this.cartDataServer);

    let info: CartModelPublic = JSON.parse(localStorage.getItem('cart') || '');

    if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
      // assign the value to our data variable which corresponds to the LocalStorage data format
      this.cartDataClient = info;
      // Loop through each entry and put it in the cartDataServer object
      this.cartDataClient.prodData.forEach(p => {
        this.productService.getProductById(p.id).subscribe((actualProdInfo: ProductsEntreprise) => {
          if (this.cartDataServer.data[0].numInCart === 0) {
            this.cartDataServer.data[0].numInCart = p.incart;
            this.cartDataServer.data[0].product = actualProdInfo;
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            this.cartDataServer.data.push({
              numInCart: p.incart,
              product: actualProdInfo
            });
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }
          this.cartDataObs$.next({ ...this.cartDataServer });
        });
      });
    } */

  }
  /*
    addToCart(product: ProductsEntreprise) {
  
      this.cartItemLists.push(product);
      this.productList.next(this.cartItemLists);
      this.getTotalPrice();
      console.log(this.cartItemLists)
  
    }
     getTotalPrice(): number {
      let grandTotal = 0;
      this.cartItemLists.map((a: any) => {
        grandTotal += a.total;
      })
      return grandTotal;
    } */

  getItems() {
    console.log("hello")
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }




  onAddProductToCart() {
    let product: ProductsEntreprise;
    this.productService.getProductById(this.productId)
      .subscribe(p => {
        product = p as ProductsEntreprise;
        product.qtite = this.qtite;

        let cart: ProductsEntreprise[] = JSON.parse(localStorage.getItem('Cart') || '{}');
        if (cart == null) {
          cart = [];
          cart.push(product);
        } else {
          let currentProduct = cart.filter(a => a._id == product._id);
          if (currentProduct.length > 0) {
            cart.filter(a => {
              a.qtite = a.qtite + this.qtite;
            });
          } else {
            cart.push(product);
          }
        }
        this.dataService.updateCartItemCount(cart.length);
        localStorage.setItem('Cart', JSON.stringify(cart));
        this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', undefined, {
          timeOut: 3000,
          toastClass: 'toast-header',
          progressBar: true,
          progressAnimation: 'decreasing',
          closeButton: true,
          enableHtml: true
        });
      });

  }

  //////////////////////////////////////////////////////////////
  getProducts() {
    return this.productList2.asObservable();
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList2.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }










  /**
   * Cart Service
   */


  /* private CalculateTotal() {
    let Total = 0;

    this.cartDataServer.data.forEach(p => {
      const { numInCart } = p;
      // const { price } = p.product;
      // @ts-ignore
      Total += numInCart * price;
    });
    this.cartDataServer.total = Total;
    this.cartTotal$.next(this.cartDataServer.total);
  } */
}
