import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CardService } from 'src/app/shared/services/card.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaydunyaService } from 'src/app/shared/services/paydunya.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  public tqtite!:any;
  public totalPrice!:any;
  public totalItem: number = 0;
  carts: any = [];
  total: number = 0;
  title:any;
  cartTotal = 0;
  cartItemArray:any= [];
  constructor(private cardService: CardService,
    public authService: AuthService,
    public pds : PaydunyaService,
    private toast: ToastrService
    ) {
      this.cardService.cartSubject.subscribe((data)=>{
        this.cartItem = data;
      });
     }

     payForm = new FormGroup({
      invoice:new FormGroup({
        total_amount: new FormControl('',[
          Validators.required
        ]),
        description: new FormControl('')
      }),
      store : new FormGroup
      ({
        name: new FormControl('')
      }),
      actions: new FormGroup({
        cancel_url: new FormControl('http://cart-ud.usinedigitale.org/products'),
        return_url: new FormControl('http://cart-ud.usinedigitale.org/thankyou'),
        callback_url: new FormControl('http://cart-ud.usinedigitale.org/thankyou')
      })
      
    })

     shippingForm: FormGroup = new FormGroup({
       fullName : new FormControl("",[
         Validators.required,
       ]),
       email: new FormControl("",[
         Validators.required,
         Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
       ]),
       tel:new FormControl("",[
         Validators.required,
         Validators.minLength(9),
         Validators.maxLength(9)
       ]),
       adresse: new FormControl("",[
         Validators.required,
         
       ]),
       city: new FormControl("",[
        Validators.required,
      ])
     })


  ngOnInit(): void {

    this.numbetItem();
    this.cartFunction();
    console.log(this.getTotal());
    console.log('object');
    console.log(this.getTotalPrice());
    console.log(this.payForm);
    console.log("test");
    this.payForm.get("invoice.total_amount")?.setValue(this.getTotalPrice());
    

  }
  getTotal(): number {
    //this.totalPrice = 0;
    this.total = 0;
    this.tqtite = 0;
    console.log(this.cartItemArray);
    this.cartItemArray.forEach((element) => {
      this.total += (element.price * element.qtite);

      localStorage.setItem('total', JSON.stringify(this.total));
      this.title = element.title
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
  getTotalPrice(): number{
    localStorage.getItem('totalPrice')
    var tt = JSON.parse(localStorage.getItem('totalPrice') || "")
    this.totalPrice = tt;

    console.log(this.totalPrice);
    return this.totalPrice;
  }
/* totalPrice(){
  localStorage.setItem('total', JSON.stringify(this.total));
 }*/
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
  get fShipping() { return this.shippingForm.controls; }

  
  effectuerPaiement(){
    if (this.shippingForm.invalid) {
      //alert("Veillez remplir les champs avant d'effectuer le paiement")
      this.toast.error("Veillez remplir les champs avant d'effectuer le paiement",'Erreur',{
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass:'toast-top-center',
        timeOut: 1500
      })
      return;
    }
    if (this.shippingForm.valid) {
      this.pds.shipping(this.shippingForm.value).subscribe(
        (res)=>{
          this.pds.paydunya(this.payForm.value).subscribe(
            (res)=>{
              console.log(res);
              window.location.href = res.response_text;
            }
          )
        }
      )
    }
  }
  

}
