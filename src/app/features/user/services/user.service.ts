import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array <User> =[];

constructor(private httpClient: HttpClient) { }

createUser(user: User) {
  return this.httpClient.post(environment.baseApiUrl + 'user/create', user);
}

getUser() {
  return this.httpClient.get<Array<User>>(environment.baseApiUrl + 'user');
}
getUserById(id: number) {
  return this.httpClient.get<User>(environment.baseApiUrl + `user/details/${id}`)
}
getUserByEmailAndPassword(email: string, password: string){
  return this.httpClient.post<User>(environment.baseApiUrl + 'user/autenticate', {email, password})
  // return this.users.find((user)=> user.email === email && user.password === password);

}
removeUser(id: number) {
  return this.httpClient.delete(environment.baseApiUrl + 'user/remove', {body:{id}});
  }
}
