import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../services/role.service';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-role-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit{

  departments: Department[] = [];

  roleForm: FormGroup = new FormGroup({
    roleName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    departmentID: new FormControl(null, Validators.required)
  });

  constructor(
    private _roleService: RoleService,
    private _departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  /** Get departments from Department Service */
  getDepartments(): void {
    this.departments = this._departmentService.getDepartments();
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      const formValue = {
        ...this.roleForm.value,
        departmentID: Number(this.roleForm.value.departmentID)
      };
      // console.log('Form Submitted:', formValue);
      this._roleService.addRole(formValue);
      this.roleForm.reset();
    }
  }

}
