import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
import { LoginService } from '../login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router, private loginService: LoginService) { }
  username: string;
  password: string;
  ngOnInit() {
  }

  userLogin() {
    this.httpClient.get(`https://kem.greenkoncepts.com/ems/services/ResourceService/login?username=${this.username}&credential=${this.password}`).subscribe((data: any) => {
      this.loginService.setLoginInfo({ "username": data.username, "groupName": data.groupName , "sessionKey":data.key });
      this.router.navigate(['/main']);
    },
      error => {
        console.log('oops', error)
        $("#exampleModal").modal('show');
      }
    );

    /* let getRandom = (Math.random()>0.5)? 1 : 0;
    if(getRandom ===1){
      let userInfo = {
        "username":this.username,
        "password":this.password
      }
      this.loginService.setLoginInfo(userInfo)
      this.router.navigate(['/main'])
    }else{
      $("#exampleModal").modal('show');
    } */

  };
 

}
