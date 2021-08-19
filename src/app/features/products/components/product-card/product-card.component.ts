import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductsComponent } from 'src/app/shared/dialog/dialog-products/dialog-products.component';
import { Product } from '../../models/product.module';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
cpf='38409309874';
  @Input()
  product?: Product;


  openDialog() {
    this.dialog.open(DialogProductsComponent, {
      data:{
        title: this.product?.title,
        message: this.product?.img,
        message1:this.product?.id,
        message2: this.product?.price,
        message3: this.product?.weight,
        message4: this.product?.supply,
        
      }
    });
    

  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // func para mascara preco
  transformPrice(price: number) {
    var f = this.product?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return f
}
  addToCart() {
    alert(`O produto ${this.product?.title} foi adicionado ao carrinho!`);
  }
}
