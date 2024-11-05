import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentID: number = 3;

  departments: Department[] = [
    new Department(0, "Finance"),
    new Department(1, "Human Resources"),
    new Department(2, "Information Technology")
  ];

  constructor() { }

  /** Get Departments */
  getDepartments(): Department[] {
    return this.departments;
  }

  /** Get Departments based on id */
  getDepartment(id: number): Department | undefined {
    for(let i=0; i<this.departments.length; i++) {
      if(this.departments[i].departmentID == id) {
        return this.departments[i];
      }
    }
    return undefined
  }

  /** Post new Department */
  addDepartment(department: Department): void {
    let newDepartment = new Department(this.departmentID++, department.departmentName);
    this.departments.push(newDepartment);
    // console.log(this.departments);
  }

  /** Update existing Department based on id */
  updateDepartment(id: number, department: Department): void {
    for(let i=0; i<this.departments.length; i++) {
      if(this.departments[i].departmentID == id) {
        this.departments[i] = department;
      }
    }
  }

  /** Delete Department based on id */
  deleteDepartment(id: number): void {
    for(let i=0; i<this.departments.length; i++) {
      if(this.departments[i].departmentID == id) {
        this.departments.splice(i, 1);
      }
    }
  }

}
