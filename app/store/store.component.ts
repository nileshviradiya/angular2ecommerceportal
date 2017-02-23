import { Component, OnInit,ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router'

import {ProductDetailsComponent} from '../store/product_details/product.details.component'
import {ProductListResolver} from '../services/product.list-resolver.service'

@Component({
  template: `
    <router-outlet></router-outlet>
    <breadcrumb></breadcrumb>
    <product-list></product-list>
  `
})
export class Storecmp implements OnInit {

    constructor(private route:ActivatedRoute)     { }

  ngOnInit() {
      console.log('root'+ this.route.snapshot.params['productcategory']);
 //   this.products= this.productService.getProduct(this.route.snapshot.params['productcategory']);
   
  }

}