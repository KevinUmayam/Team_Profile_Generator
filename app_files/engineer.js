const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  returnGithub() {
    return this.github;
  }
  returnRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
