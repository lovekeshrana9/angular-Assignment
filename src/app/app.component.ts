import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAssignment';
  isScrolled: boolean;

  scrollEvent(event) {
    this.isScrolled = event.target.scrollTop >= 50 ;
  }
}
