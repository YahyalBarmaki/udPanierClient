import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { Cart, CartItem } from 'src/app/models/cart';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  getId: any;
  @Input() qtite!: number;
  @Input() productId!: number;
  @Input() product!: ProductsEntreprise;
  @ViewChild('quantity') quantityInput;
  currentProduct: ProductsEntreprise | undefined;
  total: number = 0;
  currentproduct: any;
  productsList: ProductsEntreprise[] = [];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cardService: CardService,
    private dataService: DataService,
    private toast: ToastrService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap.get('productId');
    this.getId = routeParams;
    console.log(this.getId)
    this.productService.getProductById(this.getId).subscribe((res => {
      this.currentproduct = res
      console.log(this.currentproduct)
    }))
    this.productService.getProducts().pipe(
      map((res) => {
        this.productsList = res;
      })
    )


  }
 
  itemCarts:any = []
  addToCart(item: any) {
    //this.cardService.addtoCart(item);
    console.log(item);

    let cartDataNull = localStorage.getItem('Cart')
    if (cartDataNull == null) {
      let storeDataGet:any= []
      storeDataGet.push(item);
      localStorage.setItem('Cart',JSON.stringify(storeDataGet))
    }else{
      var _id = item._id;
      let index: number = -1;
      this.itemCarts =JSON.parse(localStorage.getItem('Cart')|| '')
      for (let i = 0; i < this.itemCarts.length; i++) {
            if (parseInt(_id) === parseInt(this.itemCarts[i]._id)) {
                this.itemCarts[i].qtite = item.qtite
            }
           /*  index = i;
            break; */
      }
      if (index == -1) {
        console.log(index);
        this.itemCarts.push(item);
        localStorage.setItem('Cart',JSON.stringify(this.itemCarts));
      }
      else{
        localStorage.setItem('Cart',JSON.stringify(this.itemCarts));
      }
    }
    this.nbrePanierFunc();
  }
  
  nbrePanier:number = 0;
  nbrePanierFunc(){
    var cartValue = JSON.parse(localStorage.getItem('Cart') || '');
    this.nbrePanier = cartValue.length;
    this.cardService.cartSubject.next(this.nbrePanier);
  }

  getProduct(id): void {
    this.productService.getProductById(id)
      .subscribe(
        product => {
          this.currentProduct = product;
          console.log(product);
        },
        error => {
          console.log(error);
        });
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
    
    /* let value = parseInt(this.quantityInput.nativeElement.value);
    console.log(value)
    if (this.currentproduct.qtite >= 1) {
      value++;
    } else {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString(); */
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

  /**
   * Method quantity
   */
  onUpdateQuantity(type, _id) {
    if (type == 1) {
      this.productsList.forEach((element, index) => {
        if (element._id == _id) {
          this.productsList[index].qtite = element.qtite + 1;
        }
      });
    } else {
      this.productsList.forEach((element, index) => {
        if (element._id == _id) {
          this.productsList[index].qtite = element.qtite - 1;
        }
      });
    }
    this.getTotal();
  }
  getTotal() {
    this.total = 0;
    this.productsList.forEach((element) => {
      this.total = this.total + (element.price * element.qtite);
    })
  }
}


