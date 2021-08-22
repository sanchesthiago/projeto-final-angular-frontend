import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Product } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //array de produtos
products: Array<Product> =[];



  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Array<Product>>(environment.baseApiUrl + 'product');
  }

  getProductById(id: number) {
    return this.httpClient.get<Product>(environment.baseApiUrl + `product/details/${id}`);
  }

  removeProduct(id:number){
    return this.httpClient.delete(environment.baseApiUrl + 'product/remove', {body:{id}});
  }

  createProduct (product:Product){
      return this.httpClient.post(environment.baseApiUrl + 'product/create', product)
  }

  getProductByTitle(title: string) {
    return this.products.find((product) => product.title === title);
  }
  getProductsByFilterTitle(title: string) {
    return this.products.filter((product) => product.title.toUpperCase().search(title.toUpperCase()) > -1);
  }

  getProductsByFilterId(id: number) {
    const product = this.getProductById(Number(id));
    if(!product) {
      return [];
    }
    return [product];
  }
  
}
