import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerComponent} from './view/customer/customer.component';
import {HeaderComponent} from './view/header/header.component';
import {ItemComponent} from './view/item/item.component';
import {OrderComponent} from './view/order/order.component';
import {ViewAllComponent} from './view/view-all/view-all.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'viewAll',
    component: ViewAllComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'header'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeaderComponent,
    ItemComponent,
    OrderComponent,
    ViewAllComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
