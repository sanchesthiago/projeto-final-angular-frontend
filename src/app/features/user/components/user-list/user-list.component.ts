import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  data = new Date();
  hora = this.data.getHours();
  min = this.data.getMinutes();
  tempo = (`${this.hora}h:${this.min}m`)
  after = "/assets/afternoon.png"
  day ="/assets/day.png"
  night ="/assets/night.png"

@Input()  
users: Array <User> =[];

  constructor() { }

  ngOnInit(): void {
  }

  passTime(){
    if(this.hora<=12){
       return this.day
      }
    if(this.hora>=14 && this.hora<=18){
      return this.after
    }
    if(this.hora>=18 && this.hora<=23){
      return this.night
    }
    return
  
    
  }

}
