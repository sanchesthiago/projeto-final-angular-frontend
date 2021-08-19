import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { RouterModule } from '@angular/router';
import { DialogUserComponent } from './dialog/dialog-user/dialog-user.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { DialogProductsComponent } from './dialog/dialog-products/dialog-products.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, CpfPipe, DialogUserComponent, DialogProductsComponent,],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule, 
    MatCarouselModule,
    MatToolbarModule,
    MatProgressBarModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CpfPipe,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCarouselModule,
    MatToolbarModule,
    MatProgressBarModule
    
    
    
    
  ]
})
export class SharedModule { }
