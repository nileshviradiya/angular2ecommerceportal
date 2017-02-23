import { Component, OnInit, Inject, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { JQ_TOKEN } from '../../common/index'
import { IProduct } from '../../services/product.model'
@Component({
    selector: 'topbar',
    templateUrl: 'app/store/sidebar/topbar.component.html',
    styleUrls: ['app/store/product_list/css/style.css']
})
export class topbarComponent implements OnInit {
    @Input() productcategory: string
    @Input() pcount: Number;
    private switchButtonModel: string = '1';
    @Output() notifySort: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifyList: EventEmitter<any> = new EventEmitter<any>();
    @Output() notifyGrid: EventEmitter<any> = new EventEmitter<any>();
    constructor(private productService: ProductService, private route: ActivatedRoute, @Inject(JQ_TOKEN) private $: any, private router: Router) {

        console.log("topbar constructor")
    }
    ngOnInit() {
        console.log("topbar ngOnInit")

    }
    ListClicked(event) {
        this.notifyList.emit(event)
    }
    GridClicked(event) {
        this.notifyGrid.emit(event)
    }
    Sort(Sortby: string) {
        this.notifySort.emit(Sortby);
    }
}