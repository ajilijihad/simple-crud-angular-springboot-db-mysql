import { RegisterComponent } from './resgister/register.component';
import { LoginComponent } from './login/login.component';
import { Route } from '@angular/router';
import { WebsiteComponent } from './website.component';

export const WebsiteRoutes: Route[] = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    
    ]     
  }
];
