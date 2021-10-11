// TODO: Include packages needed for this application
// inquirer was installed to the folder
const inquirer = require('inquirer');
const fs = require("fs");

// the prompts which the system will ask the user
inquirer.prompt([
    // ask user for the name of the project
    {
      type: 'title',
      message: 'What is the title of the project?',
      name: 'projectName',
    },
    // ask the user for a description of the assignment
    {
      type: 'section',
      message: 'How would you describe the application?',
      name: 'description',
    },
    // ask the user what is needed in the table of contents
    {
      type: 'section',
      message: 'What do you want to include in the Table of Contents?',
      name: 'table',
    },
    //ask the user for what was installed for the project(example for this assignment "inquirer" was installed)
    {
        type: 'section',
        message: 'What was installed into NodeJS?',
        name: 'installation',
    },
    // ask the user for the purpose of the application
    {
        type: 'section',
        message: 'Why would someone use this application?',
        name: 'useage',
    },
    // ask the user which license was used
    {
        type: 'section',
        message: 'Which license was used?',
        name: 'license',
    },
    // ask the user who was involved in creating the application
    {
        type: 'section',
        message: 'Who contributed to the application?',
        name: 'constribution',
    },
    // asking the user which tests were applied
    {
        type: 'section',
        message: 'Which test have been done?',
        name: 'test',
    },
    // ask the user if they have any questions or problems with the project
    {
        type: 'section',
        message: 'Are there any questions?',
        name: 'questions',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
 
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
