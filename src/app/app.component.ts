import { slideInAnimation } from './route-animation';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  public actualRoute: String;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(val =>  (val instanceof NavigationEnd) && (this.actualRoute = val.url));
  }

}

