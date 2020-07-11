import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private httpClient:HttpClient,private loginService:LoginService) { }

  orderDetails: any = [];
  showLoader:boolean =false;
  loginInfo = {
    "username":"",
    "groupName":"",
    "sessionKey":""
  }
  ngOnInit() {
    this.getOrderDetails();
    this.loginService.currentLoginInfo.subscribe( _loginInfo => this.loginInfo = _loginInfo);
  }

  getOrderDetails(){
    this.showLoader = true;
    this.httpClient.get("http://13.76.255.150:8300/gktest/getAllOrders?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c").subscribe(
      data => {
        this.orderDetails = data;
        this.showLoader = false;
      },
      error =>{
        console.log('oops', error)
        this.showLoader = false;
      } 
    );
  }

}
