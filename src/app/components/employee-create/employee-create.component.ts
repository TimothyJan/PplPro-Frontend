import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

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
export class EmployeeCreateComponent {
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    position: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    salary: new FormControl(0,  Validators.min(0)),
    department: new FormControl("", Validators.required),
    role: new FormControl("", Validators.required)
  });

  constructor(
    private _employeeService: EmployeeService
  ) {}

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted:', this.employeeForm.value);
      this._employeeService.addEmployee(this.employeeForm.value);
      this.employeeForm.reset();
    }
  }
}
