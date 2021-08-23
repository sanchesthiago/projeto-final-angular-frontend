import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import * as moment from 'moment';
@Component({
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {
  dateToday = moment().format('YYYY/MM/DD');


  productForm = new FormGroup({
    title: new FormControl ('', [Validators.required]),
    weight: new FormControl ('', [Validators.required]),
    img: new FormControl(''),
    price: new FormControl('',[Validators.required]),
    supply: new FormControl ('',[Validators.required]),
    

  });

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(productForm: FormGroup) {
    const formValue = productForm.value;
    this.productService.createProduct(formValue).subscribe((result) =>{
      alert('Usuario adicionado com sucesso!');
      this.router.navigateByUrl('/products');
    }, err => {
      console.log(err);
    });

    }; 

}
