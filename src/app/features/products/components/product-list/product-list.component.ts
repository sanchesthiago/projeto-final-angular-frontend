import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.module';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Array<Product> =[];

  constructor() { }

  ngOnInit(): void {
  }

  
  


}
