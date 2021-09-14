const inquirer = require('inquirer');
const fs = require('fs')

const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');

const outputHTML = (html) => {
  fs.writeFile('output.html', html, (err) => {
    if (err) console.log(err)
  })
};  

inquirer
    .prompt ([
      {
        type:'input',
        name:'name',
        message:'What is the Employee`s` name?'
      },
      {
        type:'input',
        name:'position',
        message:'What is the Employee`s` position?',
        choices: ['Manager', 'Engineer', 'Intern']
      },
      {
        type:'input',
        name:'email',
        message:'What is the Employee`s` Email?'
      },
      {
        type:'input',
        name:'id',
        message:'What is the Employee`s` ID number?'
      },
    ]).then(({name, position, email, id, gitHub}) => {
        const header = renderHeader(name, position);
        const empInfo = renderInfo(email, id, gitHub);
        const baseTemplate = renderBaseTemplate(
          header,
            empInfo,
        );
      outputHTML(baseTemplate);
    })
