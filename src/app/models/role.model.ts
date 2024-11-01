export class Role {
  roleID: number = 0;
  roleName: string = "";
  departmentID: number = 0;

  constructor(init?: Partial<Role>) {
    Object.assign(this, init);
  }
}
