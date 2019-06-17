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
import {SideBarComponent} from './view/side-bar/side-bar.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'customer',
        component: CustomerComponent,
      },
      {
        path: 'item',
        component: ItemComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
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
    DashboardComponent,
    SideBarComponent
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
