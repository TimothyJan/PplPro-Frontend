import { Component } from '@angular/core';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    EmployeeListComponent,
    EmployeeCreateComponent,
    FooterComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
