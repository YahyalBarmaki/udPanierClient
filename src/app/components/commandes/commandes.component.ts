import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CardService } from 'src/app/shared/services/card.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

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

     payForm = new FormGroup({
       invoice: new FormGroup({
        total_amount: new FormControl("",[
          Validators.required
        ]),
        description: new FormControl('')
       })
     })
     shipping = new FormGroup({
       fullName : new FormControl("",[
         Validators.required,
       ]),
       email: new FormControl("",[
         Validators.required
       ]),
       adresse: new FormControl("",[
         Validators.required
       ]),
       tel:new FormControl("",[
         Validators.required
       ])
     })



  ngOnInit(): void {

    this.numbetItem();
    this.cartFunction();
    console.log(this.getTotal());
    this.payForm.get('invoice.total_amount')?.setValue(this.getTotal());
  }
  getTotal(): number {
    this.total = 0;
    this.cartItemArray.forEach((element) => {
      this.total += (element.price * element.qtite);
    })
    return this.total;
  }
  cartItem:number = 0;
  numbetItem(){
    if(localStorage.getItem('Cart') != null){
      var cpt = JSON.parse(localStorage.getItem('Cart') || "") ;
      this.cartItem = cpt.length;
    }
  }

  cartFunction(){
    if (localStorage.getItem('Cart')) {
      this.cartItemArray = JSON.parse(localStorage.getItem('Cart') || '');

    } 
  }
  nbrePanier:number = 0;
  nbrePanierFunc(){
    var cartValue = JSON.parse(localStorage.getItem('Cart') || '');
    this.nbrePanier = cartValue.length;
    this.cardService.cartSubject.next(this.nbrePanier);
  }
  effectuerPaiement(){

  }

}
