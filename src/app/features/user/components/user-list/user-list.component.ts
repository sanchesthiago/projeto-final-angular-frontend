import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
@Input()  
users: Array <User> =[];
  constructor() { }

  ngOnInit(): void {
  }

}
