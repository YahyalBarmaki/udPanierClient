import { Component, OnInit } from '@angular/core';
import { ProductsEntreprise, productsEntreprises } from 'src/app/models/products';
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
  items = this.cardService.getItems();
  //productsList: ProductsEntreprise[] = [];
  product: ProductsEntreprise | undefined;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cardService: CardService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = productsEntreprises.find(product => product.id === productIdFromRoute);
    this.items.forEach(item => {

      console.log(item.qtite)

    })

    //console.log(this.product?.qtite)
  }
  alertSuccess() {
    this.toastr.show('Ajout reussi', 'Message')
  }
  quantite = 1;
  addToCart(product: ProductsEntreprise) {
    this.cardService.addToCart(product);
    //window.alert('Your product has been added to the cart!');


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

