import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router"
import { Injectable } from "@angular/core"
import { ProductService } from './product.service'
import { ProductListComponent } from '../store/product_list/product.list.component'
import { Observer } from 'rxjs'
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ProductListResolver  { 
    constructor(private productService:ProductService)     {   }

  resolve(route: ActivatedRouteSnapshot) {
  //  return this.eventService.getEvents().map(events => events)
   console.log(route.params['productcategory']);
  return this.productService.getProduct(route.params['productcategory']).map(products => products)
        //return this.PRODUCTS.find(product => product.productcategory === productcategory)

  }
}