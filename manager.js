class Manager {
  constructor(name, id, email, officeNum) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNum = officeNum;
  }
  returnName() {
    return this.name;
  }
  returnId() {
    return this.id;
  }
  returnEmail() {
    return this.email;
  }

  returnofficeNum() {
    return this.officeNum;
  }
  returnRole() {
    return "manager";
  }
}

module.exports = Manager;
