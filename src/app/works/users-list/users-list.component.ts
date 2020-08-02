import { Component, OnInit } from '@angular/core';
import {User} from './../../shared/models/user';
import { IUser} from './../../shared/interfaces/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  login: string;
  password: string;
  email: string;
  userId: number;
  usersArray: Array<IUser> = [];
  isEdit = false;
  isAdd = true;

  constructor() { }

  ngOnInit(): void {
  }

  // добавлення користувача
  addUser(): void {
    let newUser = new User(0, this.login, this.password, this.email);
    if( this.usersArray.length !== 0 ) {
      newUser.id = this.usersArray.slice(-1)[0].id +1;
    }

    this.usersArray.push(newUser);
    this.login = '';
    this.password = '';
    this.email = '';
}
  //редагування користувача
  editUser(user:IUser, i:number ):void{
    this.userId = i;
    this.login = user.login;
    this.password = user.password;
    this.email = user.email;
    this.isEdit = true;
    this.isAdd = false;
  }

  // зберігаємо користувача
  saveUser(): void{
    this.usersArray[this.userId].login = this.login;
    this.usersArray[this.userId].password = this.password;
    this.usersArray[this.userId].email = this.email;
    this.isEdit = false;
    this.isAdd = true;
    this.login = '';
    this.password = '';
    this.email = '';
  }

  
//видаляємо користувача

  deleteUser(user:IUser, i:number): void{
   this.usersArray.splice(i, 1);
  }

}
