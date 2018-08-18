import { Component } from '@angular/core';
import { UserModel } from './Model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  RememberMe:boolean = false;
  loginUser(user: UserModel) {
    console.log('Login User', user, this.RememberMe);
  }

  CreateUser(user: UserModel) {
    console.log('Create User', user);
  }

  RememberUser(checked:boolean){
    this.RememberMe = checked;
  }
}