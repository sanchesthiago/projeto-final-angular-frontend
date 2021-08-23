import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsPageComponent } from './pages/product-page/products.page.component';

import { RouterModule } from '@angular/router';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [ProductCardComponent,ProductListComponent, ProductsPageComponent, CreateProductPageComponent,],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [ProductsPageComponent, ProductCardComponent, ProductListComponent]
})
export class ProductsModule { }
