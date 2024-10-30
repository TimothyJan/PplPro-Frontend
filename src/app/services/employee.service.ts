import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployee(id: number): Employee | undefined {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        return this.employees[i];
      }
    }
    return undefined
  }

  addEmployee(employee: Employee): void {
    let newEmployee = new Employee(employee);
    this.employees.push(newEmployee);
  }

  updateEmployee(id: number, employee: Employee): void {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        this.employees[i] = employee;
      }
    }
  }

  deleteEmployee(id: number): void {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        this.employees.splice(i, 1);
      }
    }
  }

}
