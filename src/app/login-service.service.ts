import { Injectable } from '@angular/core';
import { BehaviorSubject  } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // we can set any data to the below BehaviorSubject to share across the application.
  private loginInfo = new BehaviorSubject<any>({"username":"","groupName":"","sessionKey":""});
  currentLoginInfo = this.loginInfo.asObservable();

  constructor(private router:Router) { }

  setLoginInfo(_loginInfo:any){
    this.loginInfo.next(_loginInfo);
  }

}
