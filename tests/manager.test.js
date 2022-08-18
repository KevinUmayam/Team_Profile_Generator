const Manager = require("../app_files/manager");

describe("Visibility", () => {
  it("We make sure that the name being passed is correct", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.name).toBe("kevin");
  });

  it("we make sure that the id passsed is the correct one", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.id).toBe("12345");
  });

  it("we make sure that the email passsed is the correct one", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.email).toBe("kevin@email.com");
  });

  it("we make sure that the school passsed is the correct one", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.officeNum).toBe("54321");
  });

  it("we want to get the proper name return", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.returnName()).toBe("kevin");
  });

  it("we want to get the proper id return", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.returnId()).toBe("12345");
  });

  it("we want to get the proper email return", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.returnEmail()).toBe("kevin@email.com");
  });

  it("we want to get the proper school office number to return", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.returnofficeNum()).toBe("54321");
  });

  it("we want to get the proper role return", () => {
    const manager = new Manager("kevin", "12345", "kevin@email.com", "54321");

    expect(manager.returnRole()).toBe("manager");
  });
});
