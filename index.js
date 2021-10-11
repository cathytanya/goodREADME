// TODO: Include packages needed for this application
// inquirer was installed to the folder
const inquirer = require('inquirer');
const fs = require("fs");

// the prompts which the system will ask the user
inquirer.prompt([
    // ask user for the name of the project
    {
      type: 'input',
      message: 'What is the title of the project?',
      name: 'title',
    },
    // ask the user for a description of the assignment
    {
      type: 'input',
      message: 'How would you describe the application?',
      name: 'description',
    },
    // ask the user what is needed in the table of contents
    {
      type: 'input',
      message: 'What do you want to include in the Table of Contents?',
      name: 'table',
    },
    //ask the user for what was installed for the project(example for this assignment "inquirer" was installed)
    {
        type: 'input',
        message: 'What was installed into NodeJS?',
        name: 'installation',
    },
    // ask the user for the purpose of the application
    {
        type: 'input',
        message: 'Why would someone use this application?',
        name: 'useage',
    },
    // ask the user which license was used
    {
        type: 'list',
        message: 'Which license was used?',
        name: 'license',
        choices: ['MIT License','The GPL License','Apache License','N/A']
    },
    // ask the user who was involved in creating the application
    {
        type: 'input',
        message: 'Who contributed to the application?',
        name: 'constribution',
    },
    // asking the user which tests were applied
    {
        type: 'input',
        message: 'Which test have been done?',
        name: 'test',
    },
    // ask the user if they have any questions or problems with the project
    {
        type: 'input',
        message: 'Are there any questions?',
        name: 'questions',
    },
  ])
//   within the promise there is the template of how the information will appear on the README file
  .then(({
    title,
    description,
    table,
    installation,
    useage,
    license,
    constribution,
    test,
    questions
  })=>{
      const template =`# ${title}
      
      *[Description](#description)
      *[Table of Contents](#table)
      *[Install](#installation)
      *[Usage](#useage)
      *[License](#license)
      *[Constribution](#constribution)
      *[Test](#test)
      *[Questions](#questions)

      ## Description
      ${description}

      ## Table of Contents
      ${table}

      ## Install
      ${installation}

      ## Usage
      ${useage}

      ## License
      ${license}

      ## Constribution
      ${constribution}

      ## Test
      ${test}

      ## Questions
      ${questions}

      `
  }

//   .then((response) =>
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
//   );
 
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
