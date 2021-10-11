// TODO: Include packages needed for this application
// inquirer was installed to the folder
const inquirer = require('inquirer');
const fs = require("fs");

// the prompts which the system will ask the user
inquirer.prompt([
// // TODO: Create an array of questions for user input
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
        message: 'Was a test done?',
        name: 'test',
    },
    // ask the user for their github username
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    // ask the user for a link to their github profile
    {
      type: 'input',
      message: 'What is your Github profile link?',
      name: 'link',
    },
    // ask the user for an email
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
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
    github,
    link,
    email
    
  })=>{
      const template =`# ${title}
      
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
      ${github}
      ${link}
      ${email}`
    // a function which creates the README file using fs
    writeToFile(title,template);
  })

// // TODO: Create a function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,template,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Successfully created README.md")
    })
}

