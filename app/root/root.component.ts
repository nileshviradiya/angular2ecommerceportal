import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <h1> Home </h1>
    <router-outlet></router-outlet>
  `
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}