const Intern = require("../intern");

describe("Visibility", () => {
  it("We make sure that the name being passed is correct", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.name).toBe("kevin");
  });

  it("we make sure that the id passsed is the correct one", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.id).toBe("12345");
  });

  it("we make sure that the email passsed is the correct one", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.email).toBe("kevin@email.com");
  });

  it("we make sure that the school passsed is the correct one", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.school).toBe("UCSD");
  });

  it("we want to get the proper name return", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.returnName()).toBe("kevin");
  });

  it("we want to get the proper id return", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.returnId()).toBe("12345");
  });

  it("we want to get the proper email return", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.returnEmail()).toBe("kevin@email.com");
  });

  it("we want to get the proper school return", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.returnSchool()).toBe("UCSD");
  });

  it("we want to get the proper role return", () => {
    const intern = new Intern("kevin", "12345", "kevin@email.com", "UCSD");

    expect(intern.returnRole()).toBe("intern");
  });
});
