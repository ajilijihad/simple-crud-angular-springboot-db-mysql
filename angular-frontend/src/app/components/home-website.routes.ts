import { AuthGuardService } from './../services/auth-guard.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Route } from '@angular/router';
import { HomeWebsiteComponent } from './home-website.component';
export const HomeWebsiteRoutes: Route[] = [
  {
    path: '',
    component: HomeWebsiteComponent,
    children: [
      {
        path: 'employees', 
        component: EmployeeListComponent,
        canActivate:[AuthGuardService]
      },
      {
        path: 'create-employee',
         component: CreateEmployeeComponent,
         canActivate:[AuthGuardService]

      },
      {
        path: '',
        redirectTo: 'employees',
        pathMatch: 'full'
      },
      {
        path: 'update-employee/:id',
         component: UpdateEmployeeComponent,
         canActivate:[AuthGuardService]

        
      },
    ]     
  }
];
