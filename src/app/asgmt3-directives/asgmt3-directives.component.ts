import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asgmt3-directives',
  templateUrl: './asgmt3-directives.component.html',
  styleUrls: ['./asgmt3-directives.component.css']
})
export class Asgmt3DirectivesComponent implements OnInit {
  buttonPressedState : boolean = false;
  aButtonPressed = [];
  constructor() { }

  ngOnInit() {
  }

  onToggle(){
    this.buttonPressedState ? this.buttonPressedState = false : this.buttonPressedState = true;
    this.aButtonPressed.push(new Date());
  }
}
