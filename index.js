//inquire variable
var inquirer = require("inquirer");
//fs variable here
const fs = require("fs");
//
const teamRoster = [];
//class imports
const Manager = require("./app_files/manager");
const Intern = require("./app_files/intern");
const Engineer = require("./app_files/engineer");
//PATHS
const path = require("path");
//create an output directory
const create_DIR = path.resolve(__dirname, "created");
//join in to the previous create dir to complete the path
const createPath = path.join(create_DIR, "team.html");
//htmlbuilder function
const renderContent = require("./template");

//manager promp
const managerPrompt = () => {
  return (
    inquirer
      //start prompt questions
      .prompt([
        //Input for managers name
        {
          type: "input",
          Message: "Please enter the managers name?",
          name: "name",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("Must provide an answer");
            } else {
              return true;
            }
          },
        },
        // Input for managers id
        {
          type: "input",
          Message: "Please enter managers id",
          name: "id",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for Email adress
        {
          type: "input",
          Message: "Enter Email adress",
          name: "email",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for managers office number
        {
          type: "input",
          Message: "Enter managers office number",
          name: "officeNum",

          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
      ])
      .then((answer) => {
        //create a new manager with the class
        const manager = new Manager(
          answer.name,
          answer.id,
          answer.email,
          answer.officeNum
        );
        //push the object to the team roster
        teamRoster.push(manager);
        //back
        addChoices();
      })
  );
};

const engineerPrompt = () => {
  return (
    inquirer
      //start prompt questions
      .prompt([
        //Input for engineers name
        {
          type: "input",
          Message: "Please enter the engineers name?",
          name: "name",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("Must provide an answer");
            } else {
              return true;
            }
          },
        },
        // Input for engineer id
        {
          type: "input",
          Message: "Please enter engineer id",
          name: "id",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for Email adress
        {
          type: "input",
          Message: "Enter Email adress",
          name: "email",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for managers office number
        {
          type: "input",
          Message: "Enter Github user name",
          name: "github",

          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
      ])
      .then((answer) => {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.github
        );
        teamRoster.push(engineer);
        //back
        addChoices();
      })
  );
};

const internPrompt = () => {
  return (
    inquirer
      //start prompt questions
      .prompt([
        //Input for interns name
        {
          type: "input",
          Message: "Please enter the interns name?",
          name: "name",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("Must provide an answer");
            } else {
              return true;
            }
          },
        },
        // Input for engineer id
        {
          type: "input",
          Message: "Please enter intern id",
          name: "id",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for Email adress
        {
          type: "input",
          Message: "Enter Email adress",
          name: "email",
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
        //Input for interns school name
        {
          type: "input",
          Message: "Enter interns school name",
          name: "school",

          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("must provide an answer");
            } else {
              return true;
            }
          },
        },
      ])
      .then((answer) => {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        teamRoster.push(intern);
        //back
        addChoices();
      })
  );
};

const addChoices = () => {
  return (
    inquirer
      //start prompt questions
      .prompt([
        //Input for interns name
        {
          type: "list",
          Message:
            "choose if you want to add a member or finish adding memebers.",
          name: "choice",
          choices: [
            "add a manager",
            "add an engineer",
            "add an intern",
            "complete team",
          ],
          //make sure they answer something
          validate: function (answer) {
            if (answer.length < 1) {
              console.log("Must provide an answer");
            } else {
              return true;
            }
          },
        },
      ])
      .then((answer) => {
        //switch statements to set badges for licence options
        switch (answer.choice) {
          case "add a manager":
            managerPrompt();
            break;
          case "add an engineer":
            engineerPrompt();
            break;
          case "add an intern":
            internPrompt();
            break;
          case "complete team":
            completeTeam();
          default:
            console.log(`error`);
        }
        // console.log(teamRoster);
        // // console.table(answer);
        // // const contentPage = readMe(answer);
        // //calling the readme creater functions
        // fs.writeFile("index.html", renderContent(teamRoster), (err) =>
        //   err ? console.log(err) : console.log("success")
        // );
      })
  );
};

const completeTeam = () => {
  console.log(teamRoster);
  //synchronously check if a file already exists in the given path or not.
  if (!fs.existsSync(create_DIR)) {
    //if it doesnt exist then create it
    fs.mkdirSync(create_DIR);
  }
  //if it does then run fs
  fs.writeFileSync(createPath, renderContent(teamRoster), (err) =>
    err ? console.log(err) : console.log("success")
  );
};
addChoices();
