class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
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

  returnSchool() {
    return this.school;
  }
  returnRole() {
    return "intern";
  }
}

module.exports = Intern;
