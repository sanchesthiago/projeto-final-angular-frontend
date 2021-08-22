import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/models/product.module';
import { HomeService } from '../service/home.service';



@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  slides = [
    {'image': 'assets/pao_bolinha.jpg'}, 
    {'image': 'assets/pao_bolinha2.jpg'},
  
  ];
    //declara o vetor de produtos do service
    products: Array<Product> = [];
    //
    //clona o array de produtos do service
  filteredProducts: Array<Product> = [];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
      this.filteredProducts = this.products;' '
  }

  findProductsByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const products = type === 'Id' ? this.homeService.getProductsByFilterId(value) : this.homeService.getProductsByFilterTitle(value);
    if(value.length === 0) {
      return this.filteredProducts = this.products;
    }
    this.filteredProducts 
    return 
  }


}
