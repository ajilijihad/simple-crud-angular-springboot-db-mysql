import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { Departement } from 'src/app/model/departement';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departement_data: Departement[];

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartment();
  }
  private getDepartment(){
    this.employeeService.getDepartementList().subscribe(dept => {
      this.departement_data = dept;
      
    });
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
    this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
   this.saveEmployee();
  }
}