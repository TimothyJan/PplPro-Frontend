import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roles: Role[] = [
    {
      "roleID": 1,
      "roleName": "Accountant",
      "departmentID": 1
    },
    {
      "roleID": 2,
      "roleName": "Financial Analyst",
      "departmentID": 1
    },
    {
      "roleID": 3,
      "roleName": "Finance Manager",
      "departmentID": 1
    },
    {
      "roleID": 4,
      "roleName": "HR Assistant",
      "departmentID": 2
    },
    {
      "roleID": 5,
      "roleName": "HR Specialist",
      "departmentID": 2
    },
    {
      "roleID": 6,
      "roleName": "HR Director",
      "departmentID": 2
    },
    {
      "roleID": 7,
      "roleName": "Software Engineer",
      "departmentID": 3
    },
    {
      "roleID": 8,
      "roleName": "Front-End Developer",
      "departmentID": 3
    },
    {
      "roleID": 9,
      "roleName": "Back-End Developer",
      "departmentID": 3
    },
    {
      "roleID": 10,
      "roleName": "Full-Stack Developer",
      "departmentID": 3
    }
  ];

  constructor() { }

  /** Get Roles */
  getRoles(): Role[] {
    return this.roles;
  }

  /** Get Roles based on DepartmenIDd */
  getRolesFromDepartmentID(departmentID: number) {
    let departmentRoles = [];
    for(let i=0; i<this.roles.length; i++) {
      if(this.roles[i].departmentID == departmentID) {
        departmentRoles.push(this.roles[i]);
      }
    }
    return departmentRoles
  }

  /** Get Role based on id */
  getRole(id: number): Role | undefined {
    for(let i=0; i<this.roles.length; i++) {
      if(this.roles[i].roleID == id) {
        return this.roles[i];
      }
    }
    return undefined
  }

  /** Post new Role */
  addRole(role: Role): void {
    let newRole = new Role(role);
    this.roles.push(newRole);
  }

  /** Update existing Role based on id */
  updateRole(id: number, role: Role): void {
    for(let i=0; i<this.roles.length; i++) {
      if(this.roles[i].roleID == id) {
        this.roles[i] = role;
      }
    }
  }

  /** Delete Role based on id */
  deleteRole(id: number): void {
    for(let i=0; i<this.roles.length; i++) {
      if(this.roles[i].roleID == id) {
        this.roles.splice(i, 1);
      }
    }
  }

}
