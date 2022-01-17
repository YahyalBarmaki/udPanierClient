import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  getId: any;
  items = this.cardService.getItems();
  @ViewChild('quantity') quantityInput;
  currentProduct: ProductsEntreprise | undefined;
  currentproduct: any;
  productsList: any;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cardService: CardService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap.get('productId');
    this.getId = routeParams;
    console.log(this.getId)
    this.productService.getProductById(this.getId).subscribe((res => {
      this.currentproduct = res
      console.log(this.currentproduct)
      //console.log(res, 'res==>')
    }))
    this.productService.getProducts().pipe(
      map((res) => {
        this.productsList = res;
      })
    )
    /* this.items.forEach(item => {

      console.log(item.qtite)

    })
 */
    this.productsList.forEach((a: any) => {
      if (a.category === "women's clothing" || a.category === "men's clothing") {
        a.category = "fashion"
      }
      Object.assign(a, { qtite: 1, total: a.price });
    });
    console.log(this.productsList)

    //console.log(this.currentProduct)
    //this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  alertSuccess() {
    this.toastr.show('Ajout reussi', 'Message')
  }
  addToCart(item: any) {
    this.cardService.addtoCart(item);

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
  plus() {

    let value = parseInt(this.quantityInput.nativeElement.value);
    console.log(value)
    if (this.currentproduct.qtite >= 1) {
      value++;

      /* if (value > this.currentproduct.qtite) {
        // @ts-ignore
        value = this.currentproduct.qtite;
        console.log(value)
      } */
    } else {
      return;
    }

    this.quantityInput.nativeElement.value = value.toString();
  }
  moins() {

    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.currentproduct.qtite > 0) {
      value--;

      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.nativeElement.value = value.toString();
  }
}


