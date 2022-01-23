import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsEntreprise } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDatas!: any;
  public products: any = [];
  @Input() _id!: number;
  public cartItemLists: any = [];
  public grandTotal !: number;
  productId!: Number;
  qtite!: number;
  cartItemArray:any= [];

  carts: ProductsEntreprise[] = [];
  total: number = 0;


  constructor(private titleService: Title,
    private cardService: CardService,
    private router: Router,
    private dataService: DataService,
    private productService: ProductService,
    private toast: ToastrService
    ) {
    this.titleService.setTitle("Cart");
  }
  cartTotal = 0;
  quantite = 1;
  ngOnInit(): void {

    /* this.dataService.cart.subscribe(a => this.products = a);
    console.log(this.products) */

    this.cardService.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log(this.products)
        this.getTotal();
      })
    this.getTotal()

    this.cartFunction()

  }
  getCartProductItems() {
    this.carts = JSON.parse(localStorage.getItem('Cart') || '{}');
  }


  removeItem(item: any) {
    console.log(item);
    //this.cardService.removeCartItem(item);
  }

  emptycart() {
    this.cardService.removeAllCart();
  }

  onUpdateQuantity(type, productId) {
    if (type == 1) {
      this.carts.forEach((element, index) => {
        if (element._id == productId) {
          this.carts[index].qtite = element.qtite + 1;
        }
      });
    } else {
      this.carts.forEach((element, index) => {
        if (element._id == productId) {
          this.carts[index].qtite = element.qtite - 1;
        }
      });
    }
    this.getTotal();
  }

  getTotal(): number {
    this.total = 0;
    this.cartItemArray.forEach((element) => {
      this.total += (element.price * element.qtite);
      console.log(this.total)
    })
    return this.total;
  }









  cartAll() {
    this.productService.getProducts().subscribe(res => {
      this.cartDatas = res
      console.log(res)
      console.log(this.cartDatas = res[0].price)
    })
  }
  /* onDelete(deleteItem) {
    this.items.splice(deleteItem, 1)
  } */
  /* emptyCart() {
    this.items.splice
   // this.items = [];
    return this.items;
    //this.router.navigate(['/cart'])

  }*/


cartFunction(){
  if (localStorage.getItem('Cart')) {
    this.cartItemArray = JSON.parse(localStorage.getItem('Cart') || '') ;
    console.log(this.cartItemArray);
  } 
}

plus(prod:any) {
  if (prod.qtite!=10) {
    prod.qtite +=1;
  console.log(prod.qtite);
  }else{
    this.toast.error('Le maximum de quantité requis est 10','Error Item',{
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass:'toast-top-right',
      timeOut: 1500
    }
      
    )
  }
}
moins(prod:any) {
  if (prod.qtite!=1) {
    prod.qtite -=1;
  console.log(prod.qtite);
  }else{

    this.toast.error('Le manimum de quantité requis est 1','Error Item',{
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass:'toast-top-right',
      timeOut: 1500
  })
    
  }
 
}
}
