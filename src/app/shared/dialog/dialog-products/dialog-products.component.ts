import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/features/products/models/product.module';

@Component({
  selector: 'app-dialog-products',
  templateUrl: './dialog-products.component.html',
  styleUrls: ['./dialog-products.component.scss']
})
export class DialogProductsComponent implements OnInit {
@Input()
product?: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
