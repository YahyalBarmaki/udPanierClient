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
  constructor(private cardService: CardService,
    public authService: AuthService,) { }

  ngOnInit(): void {
    /* this.cardService.getProducts()
      .subscribe(res => {
        this.carts = res
        this.totalItem = res.length;
        this.getTotal();
        console.log(this.totalItem)
      })
    this.getTotal(); */
    this.numbetItem();
  }
  getTotal(): number {
    this.total = 0;
    this.carts.forEach((element) => {
      this.total += (element.price * element.qtite);
      console.log(this.total)
    })
    return this.total;
  }
  numbetItem(){
    if(localStorage.getItem('Cart') != null){
      var cpt = JSON.parse(localStorage.getItem('Cart') || "") ;
      console.log("first");
      console.log(cpt);
    }
  }
  }


