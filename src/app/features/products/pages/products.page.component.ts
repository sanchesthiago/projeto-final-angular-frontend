import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.module';
import { ProductsService } from '../services/products.service';


@Component({
  templateUrl: './products.page.component.html',
  styleUrls: ['./products.page.component.scss']
})


export class ProductsPageComponent implements OnInit {
 
  slides = [
    {'image': 'assets/pao_bolinha.jpg'}, 
    {'image': 'assets/pao_bolinha2.jpg'},
  
  ];

 
  //declara o vetor de produtos do service
  products: Array<Product> = [];
  //
  //clona o array de produtos do service
filteredProducts: Array<Product> = [];


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;' '
  }

  findProductsByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const products = type === 'Id' ? this.productsService.getProductsByFilterId(value) : this.productsService.getProductsByFilterTitle(value);
    if(value.length === 0) {
      return this.filteredProducts = this.products;
    }
    return this.filteredProducts = products;
  }


}
