import { Component, Input, OnInit } from '@angular/core';
import { IFeature } from '../main/Interface/mainInterface';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent implements OnInit {

  @Input() data:IFeature;
  
  constructor() { }

  ngOnInit() {}

}
