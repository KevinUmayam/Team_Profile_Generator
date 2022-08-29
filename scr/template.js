const renderContent = (team) => {
  //   console.log(team);
  const htmlTeamCards = [];

  const managerCards = (manager) => {
    // console.log(manager);
    let mCard = ` 
       <section class="container" id="section">
        <h1 class="titlebox">Manager<i class="fas fa-coffee"></i></h1>

        <ul class="divUl">
          <li class="divLi">
            <div class="card">
              <h2 class="name">${manager.name}</h2>

              <ul class="sdivUl">
                <li>
                  <div class="smallBoxes underline">
                    <p>ID:</p>
                    <p>${manager.id}</p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>Email:</p>
                    <p><a href="mailto:${manager.email}">${manager.email}</a></p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>Off. Num:</p>
                    <p>${manager.officeNum}</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
        `;
    htmlTeamCards.push(mCard);
  };

  const engineerCards = (engineer) => {
    // console.log(engineer);
    let eCard = `<section class="container" id="section">
        <h1 class="titlebox">
          Engineer <i class="fas fa-glasses"></i>
        </h1>

        <ul class="divUl">
          <li class="divLi">
            <div class="card">
              <h2 class="name">${engineer.name}</h2>

              <ul class="sdivUl">
                <li>
                  <div class="smallBoxes underline">
                    <p>ID:</p>
                    <p>${engineer.id}</p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>Email:</p>
                    <p><a href="mailto:${engineer.email}">${engineer.email}</a></p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>Github:</p>
                    <p>
                      <a href="https://github.com/${engineer.github}" target=”_blank”
                        >${engineer.github}</a
                      >
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>`;
    htmlTeamCards.push(eCard);
  };

  const internCards = (intern) => {
    // console.log(intern);
    let iCard = ` <section class="container" id="section">
        <h1 class="titlebox">
          Intern <i class="fas fa-graduation-cap"></i>
        </h1>

        <ul class="divUl">
          <li class="divLi">
            <div class="card">
              <h2 class="name">${intern.name}</h2>

              <ul class="sdivUl">
                <li>
                  <div class="smallBoxes underline">
                    <p>ID:</p>
                    <p>${intern.id}</p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>Email:</p>
                    <p><a href="mailto:${intern.email}">${intern.email}</a></p>
                  </div>
                </li>
                <li>
                  <div class="smallBoxes underline">
                    <p>School:</p>
                    <p>
                   ${intern.school}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>`;
    htmlTeamCards.push(iCard);
  };

  for (let i = 0; i < team.length; i++) {
    console.log(team[i].returnRole());
    if (team[i].returnRole() === "Manager") {
      console.log(team[i], "managerif");
      managerCards(team[i]);
    }
    if (team[i].returnRole() === "Engineer") {
      console.log(team[i]);
      engineerCards(team[i]);
    }
    if (team[i].returnRole() === "Intern") {
      console.log(team[i]);
      internCards(team[i]);
    }
  }

  return htmlTeamCards.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/team.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>

  <body data-background="background">
    <nav class="dashBoard">
      <h1 data-textD="color">Team Members</h1>
    </nav>
    <div class="wrapper">

          ${renderContent(team)}   
    </div>
  </body>
</html>
    `;
};
