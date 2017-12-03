import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
//  newServerName = '';
//  newServerContent = '';
  @ViewChild ('serverContentInput') serverContent: ElementRef;
  @Output() elementData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    console.log(this.serverContent);
    this.elementData.emit({
      type: 'server',
      name: nameInput.value,
      content: this.serverContent.nativeElement.value
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
