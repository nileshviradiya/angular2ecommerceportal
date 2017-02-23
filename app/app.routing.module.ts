
import { ModuleWithProviders,ViewEncapsulation } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RootComponent } from "./root/root.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { NavBarComponent } from "./nav/navbar.component";
import { Storecmp } from './store/store.component';
import {ProductListResolver} from './services/product.list-resolver.service'
import { AppComponent } from './app.component';
import {ProductDetailsComponent} from './store/product_details/product.details.component'
const routes: Routes = [
{path: 'signin', component: SigninComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'store', component:Storecmp},
{ path: '' , component:RootComponent }

]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);