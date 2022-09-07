import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RegisterComponent } from './../auth/layout/resgister/register.component';
import { LoginComponent } from './../auth/layout/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeWebsiteComponent } from './home-website.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    HomeWebsiteComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  exports: [HomeWebsiteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeWebsiteModule {}
