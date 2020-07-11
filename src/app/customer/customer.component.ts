import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }
  customerDataObj = { "customerName": "", "customerAge": "", "customerAddress": "" };
  ngOnInit() {
  }
  confirmCustomerSave() {
    this.httpClient.post('http://13.76.255.150:8300/gktest/createCustomer?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', this.customerDataObj).subscribe({
      next: data => {
        $("#exampleModal1").modal('show');
      },
      error: error => console.error('There was an error!', error)
    })

  }

  

}
