
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Storecmp } from './store.component'
import { ProductDetailsComponent } from '../store/product_details/product.details.component'
import { ProductListComponent } from '../store/product_list/product.list.component'
import { ProductListResolver } from '../services/product.list-resolver.service'
import { ProductResolver } from '../services/product.resolver.service'

export const routes: Routes = [
    { path: 'store', component: Storecmp },
    //{ path: 'store/:productcategory', component: ProductListComponent, resolve: { products: ProductListResolver } },
    { path: 'store/:productcategory', component: ProductListComponent },
    { path: 'store/:productcategory/:productname', component: ProductDetailsComponent, resolve: { productdetails: ProductResolver } }
]
