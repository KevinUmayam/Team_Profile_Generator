const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  returnofficeNum() {
    return this.officeNum;
  }
  returnRole() {
    return "Manager";
  }
}

module.exports = Manager;
