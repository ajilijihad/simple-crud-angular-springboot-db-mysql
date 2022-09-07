import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';  
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role : string;  

  user: any={};
  constructor(private fb: FormBuilder,private employeeService: EmployeeService,private router: Router,public toastr: ToastrService,) {

   }
 loginForm = this.fb.group({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  ngOnInit(): void {
  }
  login() {
    
    this.employeeService.login(this.loginForm.value.userName).subscribe(
      response =>{this.user = response;
      
       if (this.loginForm.value.password ==CryptoJS.AES.decrypt(this.user.password.trim(), "BenJanetCrypting").toString(CryptoJS.enc.Utf8))
       {
        this.role = this.user.id_role;
        localStorage.setItem('role', this.role);
        localStorage.setItem('logged', "true");

         this.employeeService.islogin = true;
        if (this.user.id_role  == 1)
         {
          this.employeeService.admin = true;
          this.router.navigate(['/employees']);
      }
      else
      {
        this.employeeService.suser = true;
        this.router.navigate(['/employees']);
      }
       }
              else
              {
                this.toastr.warning( 'Mot de Passe  Incorrecte ')
               }
          },
          error => 
          this.toastr.warning( 'Login Incorrecte ')        
          
          );
    }
  onSubmit(){
  }
}
