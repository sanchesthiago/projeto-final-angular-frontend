import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-page-details.component.html',
  styleUrls: ['./user-page-details.component.scss']
})
export class UserPageDetailsComponent implements OnInit {

  user?: User;

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log(params.id);
      this.user = this.userService.getUserById(params.id);
    });

    
  }

}
