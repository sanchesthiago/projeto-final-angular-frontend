import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserPageComponent } from './page/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserPageDetailsComponent } from './page/user-page-details/user-page-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateUserPageComponent } from './page/create-user-page/create-user-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    UserPageComponent,
    UserComponent,
    UserListComponent,
    UserPageDetailsComponent,
    CreateUserPageComponent,
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [UserPageComponent]
})
export class UserModule { }
