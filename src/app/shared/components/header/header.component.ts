import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/features/user/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = new Date();
  hora = this.data.getHours();
  min = this.data.getMinutes();
  tempo = (`${this.hora}h:${this.min}m`)
  after = "/assets/afternoon.png"
  day ="/assets/day.png"
  night ="/assets/night.png"
  user?:User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user');
    if(userStorage) this.user = JSON.parse(userStorage);
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
  exit() {
    sessionStorage.clear();
    this.navigateByUrl('/login');
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
