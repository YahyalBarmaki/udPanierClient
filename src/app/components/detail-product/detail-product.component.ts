import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsEntreprise } from 'src/app/models/products';
import { ProductService } from 'src/app/shared/services/product.service';
import { CardService } from 'src/app/shared/services/card.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  productsList: ProductsEntreprise[] = [];

  @Input()
  product: any;
  @Output() updateProduct = new EventEmitter();

  constructor(private productService: ProductService,
    private cartService: CardService) { }

  ngOnInit(): void {
    /*this.productsList = this.productService.getProductsEntreprise()
    console.log(this.productsList);*/
  }
  addToCart(product: ProductsEntreprise) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
