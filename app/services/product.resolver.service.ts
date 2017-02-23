import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { ProductService } from './product.service'

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private productService:ProductService) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params['productname']);
    console.log(route.params['productcategory']);
    return this.productService.getProductDetails(route.params['productcategory'],route.params['productname']);
  }
}
