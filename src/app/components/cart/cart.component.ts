import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductsEntreprise } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrService } from 'ngx-toastr';


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

  carts: ProductsEntreprise[] = [];
  total: number = 0;


  constructor(private titleService: Title,
    private cardService: CardService,
    private router: Router,
    private toastr: ToastrService,
    private dataService: DataService,
    private productService: ProductService) {
    this.titleService.setTitle("Cart");
  }
  cartTotal = 0;
  quantite = 1;
  ngOnInit(): void {
    /* this.items.forEach(item => {
      this.cartTotal += (item.qtite * item.price)
    }) 

    this.dataService.cart.subscribe(a => this.carts = a);
    console.log(this.carts)
    

    /* this.productService.getProducts()
      .subscribe(res => {
        this.cartItemLists = res;
        this.grandTotal = this.cardService.getTotalPrice();
      }) */
    this.cardService.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log(this.products)

        this.getTotal();
      })
    this.grandTotal = this.getTotal()
  }
  getCartProductItems() {
    this.carts = JSON.parse(localStorage.getItem('Cart') || '{}');
  }


  removeItem(item: any) {
    this.cardService.removeCartItem(item);
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
    this.products.forEach((element) => {
      this.total = this.total + (element.price * element.qtite);
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


}
