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
  carts: any = [];
  total: number = 0;
  cartTotal = 0;
  cartItemArray:any= [];

  cartDatas!: any;
  public tqtite!:any;
  public totalPrice!:any;
  public products: any = [];
  @Input() _id!: number;
  public cartItemLists: any = [];
  public grandTotal !: number;
  productId!: Number;
  qtite!: number;
  


  constructor(private titleService: Title,
    private cardService: CardService,
    private router: Router,
    private dataService: DataService,
    private productService: ProductService,
    private toast: ToastrService
    ) {
      this.cardService.cartSubject.subscribe((data)=>{
        this.cartItem = data;
      });
    this.titleService.setTitle("Cart");
  }
  //cartTotal = 0;
  quantite = 1;
  ngOnInit(): void {

    this.getTotal()
    this.cartFunction()
    console.log(this.cartFunction())
    console.log("first")
    this.numbetItem()

  }
  getCartProductItems() {
    this.carts = JSON.parse(localStorage.getItem('Cart') || '{}');
  }

  removeItem(item: any) {
    if (localStorage.getItem('Cart')) {
      this.cartItemArray = JSON.parse(localStorage.getItem('Cart') || '');
      for (let i = 0; i < this.cartItemArray.length; i++) {
        if (this.cartItemArray[i]._id === item._id) {
              this.cartItemArray.splice(i, 1);
              localStorage.setItem('Cart',JSON.stringify(this.cartItemArray));
              this.nbrePanierFunc();
          }        
      }
    }
  }
  nbrePanier:number = 0;
  nbrePanierFunc(){
    var cartValue = JSON.parse(localStorage.getItem('Cart') || '');
    this.nbrePanier = cartValue.length;
    this.cardService.cartSubject.next(this.nbrePanier);
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
  cartItem:number = 0;
  numbetItem(){
    if(localStorage.getItem('Cart') != null){
      var cpt = JSON.parse(localStorage.getItem('Cart') || "") ;
      this.cartItem = cpt.length;
    }
  }
  getTotal(): number {
    this.totalPrice = 0;
    this.total = 0;
    this.tqtite = 0;
    this.cartItemArray.forEach((element) => {
      this.total += (element.price * element.qtite);
      console.log(this.tqtite);
      console.log(this.totalPrice)
    })
    localStorage.setItem('totalPrice', JSON.stringify(this.total));
    return this.total;
  }


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
    })
  }
}
moins(prod:any) {
  if (prod.qtite!=1) {
    prod.qtite -=1;
  console.log(prod.qtite);
  }else{

    this.toast.error('Le minimum de quantité requis est 1','Error Item',{
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass:'toast-top-right',
      timeOut: 1500
  })
    
  }
 
}
}
