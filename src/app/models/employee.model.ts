export class Employee {
  employeeID: number = 0;
  name: string = "";
  position: string = "";
  salary: number = 0;
  departmentID: number = 0;
  roleID: number = 0;

  constructor(init?: Partial<Employee>) {
    Object.assign(this, init);
  }
}
