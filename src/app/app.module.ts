import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {UserFormComponent} from './UserForm/userform.component';
import { RememberMeComponent } from './UserForm/remember-me/remember-me.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    RememberMeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
