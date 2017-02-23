import { Component, OnInit, Inject } from "@angular/core";
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router'
import { JQ_TOKEN } from '../../common/index'

@Component({
  selector: 'product-details',
  templateUrl: 'app/store/product_details/product-details.component.html',
  styleUrls:  ['app/store/product_details/css/style.css']
})
export class ProductDetailsComponent   implements OnInit {
  product:any
  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }
   ngOnInit() {
    this.route.data.forEach((data) => {
      this.product = data['productdetails'];
      console.log(this.product);
    })
}
}