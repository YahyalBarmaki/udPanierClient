import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductsEntreprise, ServerResponse } from 'src/app/models/products';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  alert: boolean = false;
  //productsEntreprises = productsEntreprises;
  productsList: ProductsEntreprise[] = [];

  productsData: ProductsEntreprise[] = [];

  constructor(private titleService: Title, private productService: ProductService
  ) {
    this.titleService.setTitle("Product");
  }


  ngOnInit(): void {
    // this.productsList = this.productService.getProductsEntreprise();
    //console.log(this.productsList)

    this.allProduct()

  }
  allProduct() {
    this.productService.getProducts().subscribe((res) => {
      console.log(res)
      this.productsData = res
      console.log(this.productsData)
    })
  }

}
