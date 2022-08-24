const Engineer = require("../lib/engineer");

describe("Visibility", () => {
  it("We make sure that the name being passed is correct", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.name).toBe("kevin");
  });

  it("we make sure that the id passsed is the correct one", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.id).toBe("12345");
  });

  it("we make sure that the email passsed is the correct one", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.email).toBe("kevin@email.com");
  });

  it("we make sure that the github username passsed is the correct one", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.github).toBe("KevinUmayam");
  });

  it("we want to get the proper name return", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.returnName()).toBe("kevin");
  });

  it("we want to get the proper id return", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.returnId()).toBe("12345");
  });

  it("we want to get the proper email return", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.returnEmail()).toBe("kevin@email.com");
  });

  it("we want to get the proper github return", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.returnGithub()).toBe("KevinUmayam");
  });

  it("we want to get the proper role return", () => {
    const engineer = new Engineer(
      "kevin",
      "12345",
      "kevin@email.com",
      "KevinUmayam"
    );

    expect(engineer.returnRole()).toBe("Engineer");
  });
});
