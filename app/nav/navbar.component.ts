import { Component } from '@angular/core'

@Component
({
  selector:'nav-bar',
  templateUrl:'app/nav/navbar.component.html',
  styles: ['  .nav.navbar-nav {font-size: 15px;}    #searchForm { margin-right: 100px;} @medi (max-width:1200px) {#searchForm {display:none}} li > a.active {color: #F97924;} '],
  //  styleUrls:  ['node_modules/ng2f-bootstrap/dist/bootstrap.min.css']
})
export class NavBarComponent
{

}