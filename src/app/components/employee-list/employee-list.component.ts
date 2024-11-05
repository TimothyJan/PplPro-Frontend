import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { DepartmentService } from '../../services/department.service';
import { RoleService } from '../../services/role.service';
import { Department } from '../../models/department.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  departments: Department[] = [];
  roles: Role[] = [];
  filteredRoles: Role[] = [];
  editModeEmployeeId: number | null = null;
  originalRoleID: number | null = null;
  rolePlaceholderID = 0;  // Placeholder value for unselected role

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DepartmentService,
    private _roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.departments = this._departmentService.getDepartments();
    this.roles = this._roleService.getRoles();
  }

  loadEmployees(): void {
    this.employees = this._employeeService.getEmployees();
  }

  getDepartmentName(departmentID: number): string | undefined {
    return this._departmentService.getDepartment(departmentID)?.departmentName;
  }

  getRoleName(roleID: number): string | undefined {
    return this._roleService.getRole(roleID)?.roleName;
  }

  enterEditMode(employeeId: number): void {
    this.editModeEmployeeId = employeeId;
    const employee = this.employees.find(emp => emp.employeeID === employeeId);
    if (employee) {
      this.originalRoleID = employee.roleID;
      this.filteredRoles = this._roleService.getRolesFromDepartmentID(employee.departmentID);
    }
  }

  onDepartmentChange(departmentID: number): void {
    this.filteredRoles = this._roleService.getRolesFromDepartmentID(departmentID);
    const employee = this.employees.find(emp => emp.employeeID === this.editModeEmployeeId);
    if (employee) {
      employee.roleID = this.rolePlaceholderID;  // Reset to placeholder
    }
  }

  saveChanges(employee: Employee): void {
    if (employee.roleID !== this.rolePlaceholderID) {
      this._employeeService.updateEmployee(employee);
    }
    this.editModeEmployeeId = null;
  }

  onDelete(employeeID: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      this._employeeService.deleteEmployee(employeeID);
      this.loadEmployees();
    }
  }
}
