import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { DepartmentService } from '../../services/department.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DepartmentService,
    private _roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  /** Load Employee from the Employees Service */
  loadEmployees(): void {
    this.employees = this._employeeService.getEmployees();
  }

  /** Get DepartmentName based on DepartmentID */
  getDepartmentName(departmentID: number): string | undefined {
    if (this._departmentService.getDepartment(departmentID)) {
      return this._departmentService.getDepartment(departmentID)!.departmentName;
    }
    return undefined
  }

  /** Get RoleName based on RoleID */
  getRoleName(roleID: number): string | void {
    if (this._roleService.getRole(roleID)) {
      return this._roleService.getRole(roleID)!.roleName;
    }
    return undefined
  }

}
