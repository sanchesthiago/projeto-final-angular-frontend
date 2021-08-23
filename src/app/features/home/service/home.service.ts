import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../products/models/product.module';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  products: Array<Product> =[];
  getProducts() {
    return this.httpClient.get<Array<Product>>(environment.baseApiUrl + 'product');
  }
  getProductsByFilterId(id: number){
    return this.products.find((product)=> product.id === Number(id))
  }

  
  getProductsByFilterTitle(title: string) {
    return this.products.filter((product) => product.title.toUpperCase().search(title.toUpperCase()) > -1);
  }

  constructor(private httpClient: HttpClient) { }
}
