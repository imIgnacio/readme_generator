//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { connected } = require('process');

let projectTitle;

//Array of questions for user input
const questions = [
    {type: 'input',
    message:"What is the name of the project?",
    name: 'title'},
    {type:'input',
    message:"Please write entitled description",
    name:'description'},
    { type: 'input',
    message:"What is the Table of Contents?",
    name: 'table'}, 
    {type: 'input',
    message:"Please write installation",
    name: 'installation'}, 
    {type: 'input',
    message:"Please describe usage",
    name: 'usage'}, 
    {type: 'list',
    message:"What it the license you would like to use?",
    name: 'license',
    choices: [
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
    ]}, 
    {type: 'input',
    message:"Please write contributing",
    name: 'contributing'}, 
    {type: 'input',
    message: "What were tests done?",
    name: 'tests'}, 
    {type: 'input',
    message:"What are frequently asked questions?",
    name: 'faq'}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    const dataToWrite = 
    `# ${data.title}
    
    ##App description

    ${data.description}

    ##Table of Contents

    ${data.table}

    ##Installation Process

    ${data.installation}

    ##Usage

    ${data.usage}

    ##Contributing

    ${data.contributing}

    ##Tests

    ${data.tests}

    ##FAQ

    ${data.faq}

    ${data.license}
    `

    fs.writeFile(`${fileName}.md`, dataToWrite, (err) =>
            err ? console.error(err) : console.log('Readme created successfully!')
    )
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Readme generator app");
    console.log("You will be asked some questions, please provide information required so readme can be generated");
    console.log("Let's get started");
    console.log("\n");

    //Ask for project title so I can create readme file
    inquirer
    .prompt(questions)
    .then((data) =>  {
        writeToFile(`${data.title}`, data);
    });
}

// Function call to initialize app
init();
