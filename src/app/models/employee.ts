export class Employee {
  employeeID: number = 0;
  name: string = "";
  position: string = "";
  salary: number = 0;
  departmentID: number = 0;
  department: Department  = new Department();
  roleID: number = 0;
  role: Role = new Role();

  constructor(init?: Partial<Employee>) {
    Object.assign(this, init);
  }
}

export class Department {
  departmentID: number = 0;
  departmentName: string = "";

  constructor(init?: Partial<Department>) {
    Object.assign(this, init);
  }
}

export class Role {
  roleID: number = 0;
  roleName: string = "";

  constructor(init?: Partial<Role>) {
    Object.assign(this, init);
  }
}
