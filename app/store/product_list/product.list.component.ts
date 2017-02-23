import { Component, OnInit, Inject, OnChanges } from "@angular/core";
import { ProductService } from '../../services/product.service';
import 'rxjs/Rx';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router'
import { JQ_TOKEN } from '../../common/index'
import { IProduct } from '../../services/product.model'
import { IBrand } from '../../services/product.model'
@Component({
  selector: 'product-list',
  templateUrl: 'app/store/product_list/product-list.component.html',
  styleUrls: ['app/store/product_list/css/style.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[];
  brand: IBrand[] = [];
  category: any;
  pcount: any
  visibleProduct: IProduct[];
  sub: any;
  sortBy: string = 'high';
  constructor(private productService: ProductService, private route: ActivatedRoute, @Inject(JQ_TOKEN) private $: any, private router: Router) {
    console.log("product list con")
  }

  GridClicked(event) {
    this.$('#products .item').addClass('list-group-item');
  }
  ListClicked(event) {
    this.$('#products .item').removeClass('list-group-item');
    this.$('#products .item').addClass('grid-group-item');
  }
  ngOnInit() {
    // this.productService.getProduct(this.route.params['productcategory']).map(products => this.products)
    this.sub = this.route.params.subscribe(params => {
      this.paramsChanged(params['productcategory']);
    });
  }
  paramsChanged(productcategory: string) {
    // this.products = this.route.snapshot.data['products']
    this.productService.getProduct(productcategory).subscribe(product => this.products = product)
    //this.products = this.productService.getProduct();
    //console.log('paramsChanged');
    //console.log(this.products);
    //this.pcount = +this.products.length;
    //  this.category = productcategory;
    // console.log(this.products);
    // var uniqueNames = [];
    // var b = []
    // for (var i = 0; i < this.products.length; i++) {
    //   if (uniqueNames.indexOf(this.products[i].brand) === -1) {
    //     uniqueNames.push(this.products[i].brand)
    //     var x: IBrand = {
    //       name: this.products[i].brand,
    //       selected: false
    //     }; -

    //       b.push(x);
    //   }
    // }
    // this.brand = b;
    // for(var i = 0; i< data.length ; i++){
    //    this.brand.push({ name: data[i], selected: false });
    // }
    //  for (let item of data.values()) console.log(item);

    // for (let item of myset) {
    //   this.brand.push({ name: item, selected: false });
    // }
    //console.log('product list paramsChanged ' + productcategory + ' ' + this.pcount);
    this.router.navigate['/store/' + productcategory];
  }
  onNotifySort(sortBy: string) {
    console.log('sort ' + sortBy);
    // debugger;

    sortBy === 'High' ? this.products.sort(sortByPriceDesc) : 0
    sortBy === 'Low' ? this.products.sort(sortByPriceAsc) : 0
    sortBy === 'Discount' ? this.products.sort(sortByDiscountDesc) : 0
  }
  onNotifyBrand(message: IBrand): void {
    console.log('onNotifyBrand');
    console.log(message);
    // for(var i=0;i<message.length;i++)
    // {
    //   console.log(message[i].selected);
    //      this.Products.filter(product =>{return product.brand.toLocaleLowerCase() === element.name.toLocaleLowerCase(); })

    // }
    // message.forEach(element => {
    //   console.log(element.selected);
    //   if(element.selected===true){
    //     console.log(element.name.toLocaleLowerCase());
    //     this.Products.filter(product =>{return product.brand.toLocaleLowerCase() === element.name.toLocaleLowerCase(); })
    //   }
    // });
    //console.log(this.Products.)
  }
}

function sortByNameAsc(s1: IProduct, s2: IProduct) {
  if (s1.name > s2.name) return 1
  else if (s1.name === s2.name) return 0
  else return -1
}

function sortByDiscountDesc(s1: IProduct, s2: IProduct) {
  return s2.offers[0].discount - s1.offers[0].discount;
}
function sortByPriceDesc(s1: IProduct, s2: IProduct) {
  return s2.price - s1.price;
}

function sortByPriceAsc(s1: IProduct, s2: IProduct) {
  return s1.price - s2.price;
}


