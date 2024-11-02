import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';
import { RoleService } from '../../services/role.service';
import { Department } from '../../models/department.model';
import { Role } from '../../models/role.model';

@Component({
  selector: 'app-employee-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './employee-create.component.html',
  styleUrl: './employee-create.component.css'
})
export class EmployeeCreateComponent implements OnInit{

  departments: Department[] = []; // Array to hold department data
  roles: Role[] = []; // Array to hold role data

  employeeForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    position: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    salary: new FormControl(0,  Validators.min(0)),
    departmentID: new FormControl("", Validators.required),
    roleID: new FormControl("", Validators.required)
  });

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DepartmentService,
    private _roleService: RoleService
  ) {}

  ngOnInit(): void {
    this.departments = this._departmentService.getDepartments();

    // Listen to changes on departmentID and update roles accordingly
    this.departmentSelectionChange();
  }

  /** Department change updates the roles array to the selected Department roles  */
  departmentSelectionChange(): void {
    this.employeeForm.get('departmentID')!.valueChanges.subscribe(departmentID => {
      if (departmentID) {
        this.getRolesFromDepartmentID(departmentID);
      } else {
        this.roles = [];
        this.employeeForm.get('roleID')!.reset();
      }
    });
  }

  /** roles array is updated to selected departmentID Department roles */
  getRolesFromDepartmentID(departmentID: number): void {
    this.roles = this._roleService.getRolesFromDepartmentID(departmentID);
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
      this._employeeService.addEmployee(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }
}
