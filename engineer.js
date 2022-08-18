class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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
    return this.github;
  }
  returnRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
