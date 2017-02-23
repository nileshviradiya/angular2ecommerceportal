import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { RootComponent } from "./root/root.component";

import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { NavBarComponent } from "./nav/navbar.component"
import { routing } from "./app.routing.module";
import { Storecmp } from './store/store.component';
import { BreadcrumbComponent } from './breadcrumb'
import { BreadcrumbService } from './breadcrumbService'
import { ProductService } from './services/product.service'
import { ProductListResolver } from './services/product.list-resolver.service'
import { ProductResolver } from './services/product.resolver.service'
import { JQ_TOKEN } from './common/index'
import { ProductListComponent } from './store/product_list/product.list.component'
import { ProductDetailsComponent } from './store/product_details/product.details.component'
import { StoreModule } from './store/store.module'
import { HttpModule } from '@angular/http';
import { brandComponent } from './store/sidebar/brand.component'
import { topbarComponent } from './store/sidebar/topbar.component'
import { FormsModule } from '@angular/forms';
declare let jQuery: Object;
@NgModule({
    imports: [BrowserModule, routing, StoreModule, HttpModule, FormsModule],
    declarations: [AppComponent, RootComponent, SigninComponent, SignupComponent, NavBarComponent, Storecmp, BreadcrumbComponent, ProductListComponent, ProductDetailsComponent, brandComponent, topbarComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, { provide: LocationStrategy, useClass: HashLocationStrategy }, BreadcrumbService, ProductService, ProductListResolver, ProductResolver, { provide: JQ_TOKEN, useValue: jQuery }, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/', 'Home');
        breadcrumbService.addFriendlyNameForRoute('/signin', 'Home > Sign In');
        breadcrumbService.addFriendlyNameForRoute('/signup', 'Home > Sign Up');
        breadcrumbService.addFriendlyNameForRoute('/store', 'Home > Store ');
    }


}