const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

const outputHTML = (html) => {
  fs.writeFile('output.html', renderHTML, html, (err) => {
    if (err) console.log(err)
  })
};
function renderHTML(){
  rednerArray = [];

  renderBaseTemplate = (...content) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel= "stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
  </head>
  <body>
  <header class="jumbotron text-center bg-primary text-white">
  <h1>Meet My Team</h1>
  <h2>Full Stack Web Developers</h2>
  </header>
  <main class="container-max-width">
  <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
  <div class="card h-100 bg-primary">
  ${content.join('\n')}
  </div>
  </div>
  </div>
  </div>
  </main>
  <script src='index.js'></script>
  </body>
  </html>`
  }
for (let i = 0; i < addMember.length; i++){
  let htmlMember = '';
  if(addMember[i].role === 'Manager'){
    htmlMember = `<div class="card-body">
    <h4 class="card-title text-white">Employee Name: ${addMember[i].name()}</h4>
    <h6 class="card-title text-white">Manager</h6>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">E-Mail: <a href ='mailto:${addMember [i].email()}'>${addMember[i].email()}</a></li>
    <li class="list-group-item">ID#: ${addMember[i].id()}</li>
    <li class="list-group-item">Office #: ${addMember[i].officeNumber()}</li>
    </ul>
    </div>
    </div>`
  } else if (addMember[i].role === 'Engineer'){
    htmlMember = `<div class="card-body">
    <h4 class="card-title text-white">Employee Name: ${addMember[i].name()}</h4>
    <h6 class="card-title text-white">Engineer</h6>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">E-Mail: <a href ='mailto:${addMember [i].email()}'>${addMember[i].email()}</a></li>
    <li class="list-group-item">ID#: ${addMember[i].id()}</li>
    </ul>
    <div class="card-body">
    <a href="https://github.com/${addMember[i].gitHub()}" class="card-link text-white">GitHub</a>
    </div>
    </div>`
  } else {
    htmlMember = `<div class="card-body">
    <h4 class="card-title text-white">Employee Name: ${addMember[i].name()}</h4>
    <h6 class="card-title text-white">Intern</h6>
    </div>
    <div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">E-Mail: <a href ='mailto:${addMember [i].email()}'>${addMember[i].email()}</a></li>
    <li class="list-group-item">ID#: ${addMember[i].id()}</li>
    <li class="list-group-item">School #: ${addMember[i].school()}</li>
    </ul>
    </div>
    </div>`
  }
  rednerArray.push(htmlMember);
}
return rednerArray.join('');

};
const addMember = [];

manager();

function manager(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee`s name?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employee`s Email?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Employee`s ID number?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Do you know their office number?'
    },
  ]).then(function(res) {
    const manager = new Manager (res.managerName, res.managerId, res.managerEmail, res.officeNumber)
    addMembers.push(manager)
    newMember();
  });
};

function newMember(){
  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'position',
        message: 'What is the Employee`s position?',
        choices: ['Manager', 'Engineer', 'Intern']
      },
    ]).then (function(res){
      if (res.position === 'Engineer'){
        engineer();
      } else if (res.position === 'Intern'){
        intern();
      } else {
        outputHTML();
      }
    });
}

engineer ();
function engineer() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee`s name?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employee`s Email?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Employee`s ID number?'
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Do you know their GitHub account?'
    },
  ]).then(function(res) {
    const engineer = new Engineer (res.managerName, res.managerId, res.managerEmail, res.gitHub)
    addMembers.push(engineer)
    newMember();
  });
}

intern();
function intern (){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee`s name?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employee`s Email?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Employee`s ID number?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'If you are an Intern, what school are you currently at?'
    },
  ]).then(function(res) {
    const intern = new Intern (res.managerName, res.managerId, res.managerEmail, res.school)
    addMembers.push(intern)
    newMember();
  });
};


