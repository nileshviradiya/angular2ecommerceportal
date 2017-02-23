import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './store.route';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
 
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class StoreModule {
  public static routes = routes;
}
