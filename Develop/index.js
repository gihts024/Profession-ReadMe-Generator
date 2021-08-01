// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const Choices = require("inquirer/lib/objects/choices");
const { version } = require("os");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project ? '
},
{
    type: 'input',
    name: 'description',
    message: 'briefly describe your project: '
},
{
    type: 'input',
    name: 'Contents',
    message: 'Enter a table of Contents:'
},
{
    type: 'input',
    name: 'installation',
    message: 'please enter the installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'please enter usage information:'
},
{
    type: 'input',
    name: 'contributions',
    message: 'Enter the contribution guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:'
},
{
    type: 'list',
    name: 'license',
    message: 'Select the license you want:',
    choices: ['Free version', '6 Months Try','Complete Version'],
},

{
    type: 'input',
    name: 'username',
    message: 'Enter your github username:'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email for more information:'
},
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,  (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
       
      console.log(data);
    
      writeToFile('./output/README.md', generate(data));
    });  

};


    // Function call to initialize app
init();
// renderLicenseSection();
// renderLicenseBadge();
// renderLicenseLink();