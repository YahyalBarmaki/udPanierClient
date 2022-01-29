import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  paymentHandler: any = null;
  cartItemArray:any= [];
  total: number = 0;
  success: boolean = false
  
  failure:boolean = false
  constructor(private checkout: CheckoutService) { }

  ngOnInit(): void {

    this.invokeStripe();
    this.cartFunction();
    this.getTotal();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51KEcipKN0gt4zFdRybLeZ2pOcuj79uHPgbRdx9dCbNVZbaHiw3ZdZoLSY7peBxFdaxadGZhZ39ZmZvPfbL5QdrPP00Q4AqsXSr',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });
    
    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'Payement de la carte',
      description: 'Enregistrement de la carte',
      amount: amount * 200,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51KEcipKN0gt4zFdRybLeZ2pOcuj79uHPgbRdx9dCbNVZbaHiw3ZdZoLSY7peBxFdaxadGZhZ39ZmZvPfbL5QdrPP00Q4AqsXSr',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  cartFunction(){
    if (localStorage.getItem('Cart')) {
      this.cartItemArray = JSON.parse(localStorage.getItem('Cart') || '') ;
      console.log(this.cartItemArray);
    } 
  }
  getTotal(): number {
    this.total = 0;
    this.cartItemArray.forEach((element) => {
      this.total += (element.price * element.qtite);
      console.log(this.total)
    })
    return this.total;
  }

}
