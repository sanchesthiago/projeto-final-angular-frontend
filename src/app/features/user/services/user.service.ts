import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array <User> =[
    
  
    { 
      id: 2,
      name: 'Rose',
      email:'rose@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/rose.png'
  
    },
  
    { 
      id: 3,
      name: 'Josi',
      email:'josi@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/josi.png'
  
    },
  
    { 
      id: 4,
      name: 'Pedro',
      email:'pedro@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/pedro.png'
  
    },
  
  
  ];

constructor(private httpClient: HttpClient) { }
getDefaultStudent(): User {
  const dateToday = moment().format('YYYY/MM/DD');
  return {
    id: this.generateNextId(),
    name: '',
    email: '',
    password: '',    
    inclusionDate: dateToday,
    validRegistration: true,
    img:''
  }
}

createUser(user: User) {
  this.users.push(user);
  return this.users;
}

generateNextId(): number {
  return this.users[(this.users.length - 1)].id + 1;
}

getUser() {
  return this.users;
}
getUserById(id: number) {
  return this.users.find((user) => user.id === Number(id));
}
getUserByEmailAndPassword(email: string, password: string){
  return this.httpClient.post<User>(environment.baseApiUrl + 'user/autenticate', {email, password})
  // return this.users.find((user)=> user.email === email && user.password === password);

}
removeUser(id: number) {
  const userIndex = this.users.findIndex((user) => user.id === Number(id));
  this.users.splice(userIndex, 1);
}
}
