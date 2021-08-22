import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import {MatDialog} from '@angular/material/dialog';
import { DialogUserComponent } from 'src/app/shared/dialog/dialog-user/dialog-user.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  @Input()
  user?: User;
 
  @Input()
  detail: boolean = true;
  

  
  
  constructor(public dialog: MatDialog, private userService: UserService, private router: Router) { }
  remove(id:number) {
    this.userService.removeUser(id).subscribe((result)=> {
      alert(`Usuário ${this.user?.name} Excluido com sucesso`)
      this.router.navigateByUrl('/user');
    }, err => {console.log(err);});


  }

  openDialog() {
    this.dialog.open(DialogUserComponent, {
      data:{
        title: this.user?.name,
        message: this.user?.password,
        message2: this.user?.inclusionDate,
        message3: this.user?.validRegistration,
        message4: this.user?.img
        
      }
    });
    
  }

  ngOnInit(): void {
  }
  
}

