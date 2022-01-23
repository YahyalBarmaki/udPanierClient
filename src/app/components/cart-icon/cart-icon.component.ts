import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {
  public totalItem: number = 0;
  carts: any = [];
  total: number = 0;
  cartTotal = 0;
  cartItemArray:any= [];
  constructor(private cardService: CardService,
    public authService: AuthService,) {
      this.cardService.cartSubject.subscribe((data)=>{
        this.cartItem = data;
      });
     }

  ngOnInit(): void {
    
    this.numbetItem();
    this.cartFunction();
  }
  getTotal(): number {
    this.total = 0;
    this.carts.forEach((element) => {
      this.total += (element.price * element.qtite);
      console.log(this.total)
    })
    return this.total;
  }
  cartItem:number = 0;
  numbetItem(){
    if(localStorage.getItem('Cart') != null){
      var cpt = JSON.parse(localStorage.getItem('Cart') || "") ;
      console.log("first");
      this.cartItem = cpt.length;
      console.log(this.cartItem);
    }
  }
  cartFunction(){
    if (localStorage.getItem('Cart')) {
      this.cartItemArray = JSON.parse(localStorage.getItem('Cart') || '') ;
      console.log(this.cartItemArray);
    } 
  }
 
  }


