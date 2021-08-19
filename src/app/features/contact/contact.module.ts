import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageComponent } from './page/contact.page.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactPageComponent
  ],
  

  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class ContactModule { }
