import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav-bar></nav-bar>
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}