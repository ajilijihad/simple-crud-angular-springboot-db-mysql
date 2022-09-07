import { Departement } from 'src/app/model/departement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  islogin = false;
  admin = false;
  suser = false;

  private baseURL = "http://localhost:8080/api/employees";
  private baseURLDep = "http://localhost:8080/api/departement";

  constructor(private httpClient: HttpClient) { }
  login(userName: String): Observable<Object> {
    return this.httpClient.get(`${this.baseURL+"/user"}/${userName}`);
  }  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getDepartementList(): Observable<Departement[]>{
    return this.httpClient.get<Departement[]>(`${this.baseURLDep}`);
  }
  getDepartementById(id: number): Observable<Departement>{
    return this.httpClient.get<Departement>(`${this.baseURLDep}/${id}`);
  }
}
