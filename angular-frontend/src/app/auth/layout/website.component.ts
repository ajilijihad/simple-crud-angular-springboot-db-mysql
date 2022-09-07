import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, Location } from '@angular/common';
import { EmployeeService } from 'src/app/services/employee.service';
import { Departement } from 'src/app/model/departement';
@Component({
    selector: 'app-root',
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
    constructor( ) {}
    ngOnInit() {
    }
   
}
