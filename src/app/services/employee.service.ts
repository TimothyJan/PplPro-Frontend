import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {
      "employeeID": 1,
      "name": "Alice Johnson",
      "position": "Accountant",
      "salary": 60000,
      "departmentID": 1,
      "roleID": 1
    },
    {
      "employeeID": 2,
      "name": "Bob Smith",
      "position": "Financial Analyst",
      "salary": 70000,
      "departmentID": 1,
      "roleID": 2
    },
    {
      "employeeID": 3,
      "name": "Catherine Green",
      "position": "HR Specialist",
      "salary": 65000,
      "departmentID": 2,
      "roleID": 5
    },
    {
      "employeeID": 4,
      "name": "David Brown",
      "position": "Software Engineer",
      "salary": 90000,
      "departmentID": 3,
      "roleID": 7
    }
  ];

  constructor() { }

  /** Get Employees */
  getEmployees(): Employee[] {
    return this.employees;
  }

  /** Get Employee based on id */
  getEmployee(id: number): Employee | undefined {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        return this.employees[i];
      }
    }
    return undefined
  }

  /** Post new Employee */
  addEmployee(employee: Employee): void {
    let newEmployee = new Employee(employee);
    this.employees.push(newEmployee);
  }

  /** Update existing Employee based on id */
  updateEmployee(id: number, employee: Employee): void {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        this.employees[i] = employee;
      }
    }
  }

  /** Delete Employee based on id */
  deleteEmployee(id: number): void {
    for(let i=0; i<this.employees.length; i++) {
      if(this.employees[i].employeeID == id) {
        this.employees.splice(i, 1);
      }
    }
  }

}
