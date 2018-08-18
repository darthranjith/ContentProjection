import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remember-me',
  templateUrl: './remember-me.component.html',
  styleUrls: ['./remember-me.component.css']
})
export class RememberMeComponent {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();
  OnChecked(value:boolean){
    this.checked.emit(value);
  }
}
