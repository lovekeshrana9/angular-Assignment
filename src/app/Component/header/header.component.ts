import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.mediaqueries.css']
})
export class HeaderComponent implements OnInit {

  isScrolled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener("scroll",['$event'])
  onScroll(){
      console.log("scrolling");
  }

}
