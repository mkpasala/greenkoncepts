import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginService } from '../login-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
declare var $: any;


@Component({
    selector: 'app-hierarchy',
    templateUrl: './hierarchy.component.html',
    styleUrls: ['./hierarchy.component.css']
})

export class HierarchyComponent implements OnInit, AfterViewInit {
    @ViewChild('uniteTree', { static: false }) public treeObj: TreeViewComponent;
    // Mapping TreeView fields property with data source properties
    public hierarchicalData: Object[] = [];
    public field: Object = {};

    constructor(private loginService: LoginService, private router: Router, private httpClient: HttpClient) { }

    loginInfo = {
        "username": "",
        "groupName": "",
        "sessionKey": ""
    }
    ngOnInit() {
        this.loginService.currentLoginInfo.subscribe(_loginInfo => this.loginInfo = _loginInfo);

    }

    ngAfterViewInit() {
        this.getHierarchyDate();
    }
    getHierarchyDate() {
        if (this.loginInfo.sessionKey) {
            this.httpClient.get(`https://kem.greenkoncepts.com/ems/mvc/node-hierarchy-with-metadata?key=${this.loginInfo.sessionKey}`).subscribe((data: any) => {
                this.hierarchicalData.push(data.entity.nodeStandardMetadata);
                this.field = {
                    dataSource: this.hierarchicalData,
                    id: 'nodeId',
                    text: 'displayName',
                    child: 'children'
                };

            },
                error => {
                    console.log('oops', error)
                    $("#invalidSessionKey").modal('show');
                }
            );
        } else {
            $("#invalidSessionKey").modal('show');
        }

    };




    userLogout() {
        if (this.loginInfo.sessionKey) {
            this.httpClient.get(`https://kem.greenkoncepts.com/ems/services/ResourceService/logout?key=${this.loginInfo.sessionKey}`).subscribe((data: any) => {
                this.router.navigate(['/login']);
            },
                error => {
                    console.log('oops', error);
                }
            );
        } else {
            $("#invalidSessionKey").modal('show');
        }

    };

}
