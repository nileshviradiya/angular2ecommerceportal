import { Component, OnInit, Inject, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { JQ_TOKEN } from '../../common/index'
import { IProduct } from '../../services/product.model'

// Import and use below directive

@Component({
    selector: 'brand-list',
    templateUrl: 'app/store/sidebar/brand.component.html',
    styleUrls: ['app/store/product_list/css/style.css']
})
export class brandComponent implements OnInit {
    @Input() brand: any;
    //@Output() selectedChange: EventEmitter<any> = new EventEmitter();
    @Output() notifyBrand: EventEmitter<any> = new EventEmitter<any>();
    constructor() {
        console.log("brand constructor")
    }
    ngOnInit() {
        console.log("brand ngOnInit")
    }
  onClick() {
       this.notifyBrand.emit(this.brand);
  }
   
}