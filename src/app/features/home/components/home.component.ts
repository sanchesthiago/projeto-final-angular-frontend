import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent} from 'rxjs';
import { Product } from '../../products/models/product.module';
import { HomeService } from '../service/home.service';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  products: Array<Product>=[];
  filteredProducts: Array<Product> = [];
  

  @ViewChild('campoBusca') campoBusca!: ElementRef<HTMLInputElement>;

  constructor(private homeService:HomeService) { }

  findMembersByFilter(event: any, type: 'title') {
    const value = event.target.value;
    
    if(value.length === 0) {
      return this.filteredProducts = this.products;
    }
    if ( type === 'title' ) {
      return this.filteredProducts = this.homeService.getProductsByFilterTitle(value);
    }
    console.log(this.filteredProducts)
    return;
  }


 

  ngOnInit(): void {

    this.homeService.getProducts().subscribe((products)=>{     
        this.products = products   
        this.filteredProducts=this.products;   
    });
    

  

  // onSearchKeyUp(event: KeyboardEvent): void {
  //   this.filtro = ((event.target!) as HTMLInputElement).value;
  //   fromEvent(this.campoBusca.nativeElement, 'keyup')
  //     .pipe(

  //       debounceTime(1000)
  //     )
  //     .subscribe((e: Event) => {
  //       const target = e.target as HTMLInputElement;
  //       this.filtro = target.value;
  //     });
  // } 

  }
}
