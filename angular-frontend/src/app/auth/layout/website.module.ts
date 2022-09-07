import { RegisterComponent } from './resgister/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule, 
    RouterModule,
     HttpClientModule,
     FormsModule, 
     ReactiveFormsModule,
     ToastrModule.forRoot(),
     BrowserAnimationsModule
    ],
  declarations: [WebsiteComponent,
  LoginComponent,
  RegisterComponent,],
  exports: [WebsiteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebsiteModule {}
