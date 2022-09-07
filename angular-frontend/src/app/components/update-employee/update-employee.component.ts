import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/model/departement';
import * as CryptoJS from 'crypto-js';  

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  departement_data: Departement[];

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getDepartment();
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      this.employee.password=CryptoJS.AES.decrypt(this.employee.password.trim(), "BenJanetCrypting").toString(CryptoJS.enc.Utf8);
    }, error => console.log(error));
  }
  
  private getDepartment(){
    this.employeeService.getDepartementList().subscribe(dept => {
      this.departement_data = dept;
    });
  }
  onSubmit(){
    this.employee.password =CryptoJS.AES.encrypt(this.employee.password .trim(), "BenJanetCrypting").toString();
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
