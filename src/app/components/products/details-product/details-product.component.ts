import { Component, OnInit } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  getId: any;
  items = this.cardService.getItems();
  currentProduct: ProductsEntreprise | undefined;
  currentproduct: any;
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

    this.items.forEach(item => {

      console.log(item.qtite)

    })

    //console.log(this.currentProduct)
    //this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
  alertSuccess() {
    this.toastr.show('Ajout reussi', 'Message')
  }
  quantite = 1;
  addToCart(product: ProductsEntreprise) {
    this.cardService.addToCart(product);
    //window.alert('Your product has been added to the cart!');
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
    this.items.forEach(item => {
      this.quantite = item.qtite * 0;
      console.log(this.quantite)
      this.quantite = this.quantite + 1;
    })
  }
  moins() {
    if (this.quantite != 1) {
      this.items.forEach(item => {
        this.quantite = item.qtite = 1
        this.quantite = this.quantite - 1;
      })
    }
  }
}

