import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  @Input()
  appearance: MatFormFieldAppearance = "legacy";

  
  constructor() { }

  ngOnInit(): void {
  }

}
