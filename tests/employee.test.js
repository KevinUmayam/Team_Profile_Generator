const Employee = require("../app_files/employee");

describe("Visibility", () => {
  it("We make sure that the name being passed is correct", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.name).toBe("kevin");
  });

  it("we make sure that the id passsed is the correct one", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.id).toBe("12345");
  });

  it("we make sure that the email passsed is the correct one", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.email).toBe("kevin@email.com");
  });

  //tests for returns

  it("we want to get the proper name return", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.returnName()).toBe("kevin");
  });

  it("we want to get the proper id return", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.returnId()).toBe("12345");
  });

  it("we want to get the proper email return", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.returnEmail()).toBe("kevin@email.com");
  });

  it("we want to get the proper role return", () => {
    const employee = new Employee("kevin", "12345", "kevin@email.com", "UCSD");

    expect(employee.returnRole()).toBe("employee");
  });
});
