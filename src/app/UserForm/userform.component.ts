import {Component, EventEmitter, Output, ContentChild, AfterContentInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../Model/user.model';
import { RememberMeComponent } from './remember-me/remember-me.component';

let instance = 0;

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserFormComponent implements AfterContentInit {
  id:number=0;
  statusMessage:boolean = false;
  @ContentChild(RememberMeComponent) rememberChild: RememberMeComponent; 
  constructor() {
  this.id = ++instance;
  }
  @Output() submitted: EventEmitter<UserModel> = new EventEmitter<UserModel>()
  userForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  onSubmit() {
    this.submitted.emit(this.userForm.value);
  }

  ngAfterContentInit(){
    if(this.rememberChild)
      this.rememberChild.checked.subscribe((checked:boolean) => {
        this.statusMessage = checked;
      });
  }
}
