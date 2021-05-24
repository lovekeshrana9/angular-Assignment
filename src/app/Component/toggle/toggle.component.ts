import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

    @Input() isToggleOn: boolean;
    @Output('toggle') toggle = new EventEmitter();

  
    constructor() { }

  ngOnInit() {
  }

  toggled()
  {
    this.toggle.emit(this.isToggleOn);
  }

}
