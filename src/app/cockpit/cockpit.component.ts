import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() elementData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    this.elementData.emit({
      type: 'server',
      name: nameInput.value,
      content: this.newServerContent
    });
/*    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBlueprint() {
/*    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

}
