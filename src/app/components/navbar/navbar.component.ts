import { Component } from '@angular/core';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { FooterComponent } from '../footer/footer.component';
import { DepartmentCreateComponent } from "../department-create/department-create.component";
import { RoleCreateComponent } from "../role-create/role-create.component";
import { DepartmentListComponent } from '../department-list/department-list.component';
import { RoleListComponent } from "../role-list/role-list.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    FooterComponent,
    DepartmentCreateComponent,
    RoleCreateComponent,
    DepartmentListComponent,
    RoleListComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
