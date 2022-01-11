import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CardService } from 'src/app/shared/services/card.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cardService.getItems();

  constructor(private titleService: Title,
    private cardService: CardService,
    private router: Router) {
    this.titleService.setTitle("Cart");
  }
  cartTotal = 0;
  quantite = 1;
  ngOnInit(): void {
    this.items.forEach(item => {
      this.cartTotal += (item.qtite * item.price)
    })

  }
  onDelete(deleteItem) {
    this.items.splice(deleteItem, 1)
  }
  /* emptyCart() {
    this.items.splice
   // this.items = [];
    return this.items;
    //this.router.navigate(['/cart'])

  }*/
}
