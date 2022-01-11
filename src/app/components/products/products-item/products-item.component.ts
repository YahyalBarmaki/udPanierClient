import { Component, OnInit, Input } from '@angular/core';
import { ProductsEntreprise, ProductsParticulier } from 'src/app/models/products';
import { CardService } from 'src/app/shared/services/card.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {

  @Input() product!: ProductsEntreprise;
  @Input() productItemP!: ProductsParticulier;

  currentProduct = null;
  constructor(private cd: CardService, private productService: ProductService) { }

  ngOnInit(): void {


  }
  handleAddToCart(product: ProductsEntreprise) {
    console.log(product)
  }


}
