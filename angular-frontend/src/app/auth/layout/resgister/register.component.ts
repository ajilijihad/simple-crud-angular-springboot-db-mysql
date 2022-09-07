import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Departement } from 'src/app/model/departement';
import * as CryptoJS from 'crypto-js';  
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder,private employeeService: EmployeeService,public toastr: ToastrService,private router : Router
    ) { }
    departement_data: Departement[];

  registerForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    id_role: new FormControl('', [Validators.required]),
    id_departement: new FormControl('', [Validators.required]),
  });y
  ngOnInit(): void {    
    this.getDepartment();
  }
  saveUser(){
    this.employeeService.createEmployee(this.registerForm.value).subscribe( data =>{
      this.toastr.success('Inscription Faite avec Success'); 
      this.router.navigate(['/']);      
    },
    error => console.log(error));
  }
  onSubmit(){
    if (this.registerForm.value.password == this.registerForm.value.passwordd){
      this.registerForm.value.password =CryptoJS.AES.encrypt(this.registerForm.value.password.trim(), "BenJanetCrypting").toString(),
      this.saveUser();
      
    }else{
      this.toastr.warning( 'Vérifiet votre de passe ...');  
    }
    

  }
  private getDepartment(){
    this.employeeService.getDepartementList().subscribe(dept => {
      this.departement_data = dept;
      
    });
  }
}
