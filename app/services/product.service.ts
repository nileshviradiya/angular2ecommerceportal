import { Injectable, OnChanges } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { IProduct } from './product.model'
import { IBrand } from './product.model'
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ProductService {
  Products: IProduct[];

  Brand: IBrand[];
  constructor(private http: Http) {
    this.http.get('Product.json').map(res => <IProduct[]>res.json().data).subscribe(res => this.Products = res), error => console.log(error), () => console.log('PRODUCTS1 JSON' + this.Products);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  getProductDetails(productcategory: string, productname: string): Observable<IProduct[]> {
    console.log('getProduct  Details ' + productname);
    let subject = new Subject<any>()
    setTimeout(() => {
      subject.next(this.Products.filter(product => { return product._id.toLocaleLowerCase() === productname; }));
      subject.complete();
    }, 3000)
    return subject

  }
  //  GetBrand(): Observable<IBrand[]> {

  // var item = new Set(this.Products.map(item =>
  //       item.brand
  //     ));
  //   this.Brand= item.map((res)=>
  //    {
  //      var brand;
  //      brand.push(new { name=res,selected=false })
  //      return brand;
  //    }
  //    )
  //    console.log('brand:' + this.Brand)
  //  return this.Brand;
  // let subject = new Subject<any>()
  // setTimeout(() => {
  //   subject.next(new Set(this.Products.map(item =>
  //     item.brand
  //   )).forEach(a => console.log(a))

  //   );
  //   subject.complete();
  // }, 3000)
  // return subject

  //}
  getProduct(productcategory: string): Observable<IProduct[]> {
    console.log("getProduct - " + productcategory);

    let subject = new Subject<any>()
    setTimeout(() => {
      subject.next(this.Products.filter(product => { return product.category.toLocaleLowerCase() === productcategory; }));
      subject.complete();
    }, 3000)
    return subject
  }

  getProducts(): Observable<IProduct[]> {
    let subject = new Subject<any>()
    setTimeout(() => { subject.next(this.Products); subject.complete(); }, 3000)
    return subject
  }

}


