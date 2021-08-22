import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page.component';
import { HomeComponent } from './components/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsModule } from '../products/products.module';




@NgModule({
  declarations: [
    HomePageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsModule

  ],
})
export class HomeModule { }
