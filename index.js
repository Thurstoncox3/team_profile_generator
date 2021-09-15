const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const { ENGINE_METHOD_RAND } = require('constants');

const outputHTML = (html) => {
  fs.writeFile('output.html', html, (err) => {
    if (err) console.log(err)
  })
};

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

const renderHeader = (name, position) => {
return`<div class="card-body">
<h4 class="card-title text-white">Employee Name: ${name}</h4>
<h6 class="card-title text-white">Employee Position: ${position}</h6>
</div>`
}

const renderInfo = (email, id, gitHub) => {
  if(!/^http|https/.test(gitHub)) {
    gitHub = 'http://' + gitHub;
  }
return`<div class="card-body">
<ul class="list-group">
<li class="list-group-item">E-Mail: ${email}</li>
<li class="list-group-item">ID#: ${id}</li>
</ul>
<div class="card-body">
<a href="https://github.com/${gitHub}" class="card-link text-white">GitHub</a>
</div>
</div>`
}


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Employee`s name?'
    },
    {
      type: 'checkbox',
      name: 'position',
      message: 'What is the Employee`s position?',
      choices: ['Manager', 'Engineer', 'Intern']
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
  ]).then(({ name, position, email, id, gitHub }) => {
    const header = renderHeader(name, position);
    const empInfo = renderInfo(email, id, gitHub);
    const baseTemplate = renderBaseTemplate(
      header,
      empInfo,
    );
    outputHTML(baseTemplate);
  })
