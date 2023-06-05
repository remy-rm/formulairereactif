import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulairereactif';
  buttonClicked = false;

  buttonClick() {
    this.buttonClicked= true;
  }
  constructor(private router: Router){}

  isRouteEmpty():boolean{
    return this.router.url === '/' }
}

