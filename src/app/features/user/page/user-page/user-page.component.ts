import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  users: Array <User> =[];
  filteredUsers: Array <User> =[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe((users)=>{
      this.users=users;
      this.filteredUsers= this.users; 
    },err =>{
      console.log(err);
    });
    
  }

}
