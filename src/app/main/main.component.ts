import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showLoader:boolean =false;
  mainComponentList = [{
    "name":"Hierarchy",
    "routerName":"hierarchy",
    "id":1
  },
  {
    "name":"Customer",
    "routerName":"customer",
    "id":2
  },
  {
    "name":"Orders",
    "routerName":"orders",
    "id":3
  },
  {
    "name":"Schedules",
    "routerName":"schedules",
    "id":4
  },
  {
    "name":"Messages",
    "routerName":"messages",
    "id":5
  },
  {
    "name":"Email",
    "routerName":"email",
    "id":6
  }]

  constructor(private loginService:LoginService,private router:Router,private httpClient :HttpClient) { }
  loginInfo = {
    "username":"",
    "groupName":"",
    "sessionKey":""
  }
  ngOnInit() {
    this.loginService.currentLoginInfo.subscribe( _loginInfo => this.loginInfo = _loginInfo);
  }

 
  userLogout() {
    if(this.loginInfo.sessionKey){
      this.httpClient.get(`https://kem.greenkoncepts.com/ems/services/ResourceService/logout?key=${this.loginInfo.sessionKey}`).subscribe((data: any) => {
        this.router.navigate(['/login']);
      },
        error => {
          console.log('oops', error);
        }
      );
    }else{
      $("#invalidSessionKey").modal('show');
    }
    
  };

}
