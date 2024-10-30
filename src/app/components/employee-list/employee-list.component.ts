import { Component } from '@angular/core';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatSlideToggleModule
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

}
