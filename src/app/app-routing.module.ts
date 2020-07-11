import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { EmailComponent } from './email/email.component';
import { MessagesComponent } from './messages/messages.component';
import { SchedulesComponent } from './schedules/schedules.component';


const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path:"main",component:MainComponent
  },
  {
    path: "customer", component: CustomerComponent
  },
  {
    path: "orders", component: OrdersComponent
  },
  {
    path: "hierarchy", component: HierarchyComponent
  },
  {
    path: "email", component: EmailComponent
  },
  {
    path: "messages", component: MessagesComponent
  },
  {
    path: "schedules", component: SchedulesComponent
  },
  {
    path: "**", component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
