import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }
    role:string;
  ngOnInit(): void {
    this.getEmployees();
    this.role=localStorage.getItem("role");
    console.log(this.getDepartementById(1));
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;      
    });
  }
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  getDepartementById(id: number){
  this.employeeService.getDepartementById(id).subscribe(data => {
   console.log(data.nom_departement); 
  }, error => console.log(error));
}

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
